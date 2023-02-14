from typing import Optional
import uuid
from pydantic import BaseModel, Field

class Blog(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    title: str = Field(...)
    content: str = Field(...)
    author: str = Field(...)
    upVote: int = Field(...)
    downVote: int = Field(...)

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "_id": "066de609-b04a-4b30-b46c-32537c7f1f6e",
                "title": "Kahouli blog",
                "content": "Kahouli content",
                "author": "AlaaEddin Kahouli",
                "upvote": 0,
                "downvote": 0
            }
        }

class BlogUpdate(BaseModel):
    title: Optional[str]
    content: Optional[str]
    author: Optional[str]
    upvote: Optional[str]
    downvote: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                 "title": "Kahouli blog",
                "content": "Kahouli content",
                "author": "AlaaEddin Kahouli",
                "upvote": 0,
                "downvote": 0
            }
        }

