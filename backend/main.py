from fastapi import FastAPI, Depends, HTTPException, Security
from fastapi.security.api_key import APIKeyHeader
from sqlalchemy.orm import Session
from typing import List
import os
from dotenv import load_dotenv
import models
import schemas
import database

# Load environment variables
load_dotenv()

app = FastAPI()
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

# Routes with API Key protection
@app.get("/blogs", response_model=List[schemas.Blog])
def get_blogs(api_key: str = Depends(verify_api_key), db: Session = Depends(get_db)):
    return db.query(models.Blog).all()

@app.post("/blogs", response_model=schemas.Blog)
def create_blog(blog: schemas.Blog, api_key: str = Depends(verify_api_key), db: Session = Depends(get_db)):
    db_blog = models.Blog(title=blog.title, body=blog.body)
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
