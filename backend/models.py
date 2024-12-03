from sqlalchemy import Column, Integer, String
from database import Base

class Blog(Base):
    __tablename__ = 'blogs'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    body = Column(String, index=True)
    image_url = Column(String)
    category = Column(String, index=True)