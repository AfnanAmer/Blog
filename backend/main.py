from fastapi import FastAPI, Depends, HTTPException, Security, Query
from fastapi.security.api_key import APIKeyHeader
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
import os
from dotenv import load_dotenv
import models
import schemas
import database
import requests

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # React app
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

database.init_db()

# API Key setup
API_KEY = os.getenv("API_KEY")

api_key_header = APIKeyHeader(name="X-API-Key")

# Database dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# API Key verification
def verify_api_key(api_key: str = Depends(api_key_header)):
    if not api_key or api_key != API_KEY:
        raise HTTPException(
            status_code=403,
            detail="Could not validate API key"
        )
    return api_key

# Testing
@app.get("/allblogs", response_model=List[schemas.Blog])
def get_all_blogs(
    api_key: str = Depends(verify_api_key),
    db: Session = Depends(get_db)
):
    blogs = db.query(models.Blog)\
        .order_by(models.Blog.id.desc())\
        .all()
    return blogs



# Routes with API Key protection                                   
@app.get("/blogs", response_model=schemas.BlogResponse)
def get_blogs(
    api_key: str = Depends(verify_api_key),
    db: Session = Depends(get_db)
):
    blogs = db.query(models.Blog)\
        .order_by(models.Blog.id.desc())\
        .all()
    
    return {
        "items": blogs
    }
    
    
@app.get("/blogs/category/{category}", response_model=schemas.BlogResponse)
def get_blogs_by_category(
    category: str,
    api_key: str = Depends(verify_api_key),
    db: Session = Depends(get_db)
):
    blogs = db.query(models.Blog)\
        .filter(models.Blog.category == category)\
        .order_by(models.Blog.id.desc())\
        .all()
    return {"items": blogs}

@app.post("/api/create-blog", response_model=schemas.Blog)
def create_blog(blog: schemas.BlogCreate, api_key: str = Depends(verify_api_key), db: Session = Depends(get_db)):
    db_blog = models.Blog(title=blog.title, body=blog.body, category=blog.category, image_url=blog.image_url)
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog

@app.get("/blogs/{blog_id}", response_model=schemas.Blog)
def get_blog(blog_id: int, api_key: str = Depends(verify_api_key), db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

@app.delete("/blogs/{blog_id}")
def delete_blog(blog_id: int, api_key: str = Depends(verify_api_key), db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == blog_id).first()
    if blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    db.delete(blog)
    db.commit()
    return {"message": "Blog deleted successfully"}

# @app.get("/mailchimp/lists")
# async def get_mailchimp_lists():

@app.post("/subscribe", response_model=None)
async def subscribe(subscriber: schemas.Subscriber):
    # Get Mailchimp credentials from environment
    mailchimp_api_key = os.getenv("MAILCHIMP_API_KEY")
    mailchimp_dc = os.getenv("MAILCHIMP_DC")
    mailchimp_list_id = os.getenv("MAILCHIMP_LIST_ID")
    
    if not all([mailchimp_api_key, mailchimp_dc, mailchimp_list_id]):
        raise HTTPException(
            status_code=500,
            detail="Mailchimp configuration is missing"
        )
    
    # Add to Mailchimp
    url = f"https://{mailchimp_dc}.api.mailchimp.com/3.0/lists/{mailchimp_list_id}/members"
    data = {
        "email_address": subscriber.email,
        "status": "subscribed"
    }
    
    response = requests.post(
        url, 
        json=data, 
        auth=("anystring", mailchimp_api_key)
    )
    
    if response.status_code not in [200, 201]:
        raise HTTPException(
            status_code=response.status_code, 
            detail=response.json()
        )
    
    return {"message": "Subscription successful!", "email": subscriber.email}