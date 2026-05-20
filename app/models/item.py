from datetime import datetime

from bson import ObjectId
from pydantic import BaseModel, Field
from pydantic_core import PydanticCustomError, core_schema


class PyObjectId(ObjectId):
    @classmethod
    def __get_pydantic_core_schema__(cls):
        return core_schema.no_info_plain_validator_function(cls.validate)

    @classmethod
    def validate(cls, value):
        if isinstance(value, ObjectId):
            return value
        if isinstance(value, str) and ObjectId.is_valid(value):
            return ObjectId(value)
        raise PydanticCustomError("objectid", "Invalid ObjectId")

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")


class ItemModel(BaseModel):
    _id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str = Field(..., max_length=200)
    description: str = Field("", max_length=1000)
    completed: bool = Field(False)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime | None = None

    model_config = {
        "populate_by_name": True,
        "json_encoders": {ObjectId: str, datetime: lambda dt: dt.isoformat()},
        "extra": "forbid",
    }
