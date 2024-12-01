from typing import List
from pydantic import BaseModel

class BlogBase(BaseModel):
    title: str
    body: str

class BlogCreate(BlogBase):
    pass

class Blog(BlogBase):
    id: int

    class Config:
        orm_mode = True

class BlogResponse(BaseModel):
    items: List[Blog]
    total_pages: int
    current_page: int