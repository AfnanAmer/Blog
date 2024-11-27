from pydantic import BaseModel

class Blog(BaseModel):
    id: int
    title: str
    body: str
