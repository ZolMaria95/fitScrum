from pydantic import BaseModel, Field
from pydantic_settings import ConfigDict


class ItemCreate(BaseModel):
    title: str = Field(..., max_length=200, description="Título de la tarea.")
    description: str = Field("", max_length=1000, description="Descripción opcional de la tarea.")
    completed: bool = Field(False, description="Estado de completado.")

    model_config = ConfigDict(extra="forbid")


class ItemUpdate(BaseModel):
    title: str | None = Field(None, max_length=200)
    description: str | None = Field(None, max_length=1000)
    completed: bool | None = None

    model_config = ConfigDict(extra="forbid")


class ItemResponse(BaseModel):
    id: str = Field(..., alias="_id")
    title: str
    description: str
    completed: bool
    created_at: str
    updated_at: str | None = None

    model_config = ConfigDict(populate_by_name=True)
