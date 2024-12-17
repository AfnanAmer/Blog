from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class BlogBase(BaseModel):
    title: str
    body: str
    image_url: Optional[str] = None
    category: Optional[str] = None


class BlogCreate(BlogBase):
    pass

class Blog(BlogBase):
    id: int

    class Config:
        orm_mode = True

class BlogResponse(BaseModel):
    items: List[Blog]
    
    
class Subscriber(BaseModel):
    email: str
    

class SubscriberResponse(BaseModel):
    message: str
    email: str
    
    class Config:
        orm_mode = True 