import { Link } from "react-router-dom";
import { useField } from "../hooks/useField-fetch";
import { useState } from "react";
import axios from "axios";     
import Input from "./Input";

const AdminProductCard = ({ product, onDelete, onEdit }) => {
    const { image, name, price, id, description, category, subCategory } = product
    const [isEditing, setIsEditing] = useState(false)

    // Input Fields
    const imageUrl = useField('text')
    const nameField = useField('text')
    const priceField = useField('number')
    const descriptionField = useField('text')
    const categoryField = useField('text')
    const subCategoryField = useField('text')

    const handleEdit = () => {

      imageUrl.inputProps.onChange({ target: { value: image }}) 
      nameField.inputProps.onChange({ target: { value: name }}) 
      priceField.inputProps.onChange({ target: { value: price }}) 
      descriptionField.inputProps.onChange({ target: { value: description }}) 
      categoryField.inputProps.onChange({ target: { value: category }}) 
      subCategoryField.inputProps.onChange({ target: { value: subCategory }}) 

      setIsEditing(true)
    }

    const handleCancel = () => {

      imageUrl.reset()
      nameField.reset()
      priceField.reset()
      descriptionField.reset()
      categoryField.reset()
      subCategoryField.reset()

      setIsEditing(false)
    }

    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:5000/api/products/${id}`, {
          image: imageUrl.value,
          name: nameField.value,
          price: Number(priceField.value),
          description: descriptionField.value,
          category: categoryField.value.toUpperCase(),
          subCategory: subCategoryField.value
        })
        setIsEditing(false)
        onEdit()
      } catch (err) {
        console.error('Update failed', err)
      }
    }

    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`)
        onDelete(id)
      } catch (err) {
        console.error('Delete failed:', err)
      }
    }

    return (            
      <div className="rounded-lg max-w-xs ">
        {/* Product Image */}
        <Link to={`/products/${id}`}>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-md"    
          />  
        </Link>
                
        {/* Product Details */}
        <div className="text-center">
          {isEditing ? (
            <div className="space-y-2 mt-2">
              <Input field={nameField} placeholder="Name"/>
              <Input field={priceField} placeholder="Price"/>
              <Input field={descriptionField} placeholder="Description"/>
              <Input field={categoryField} placeholder="Category"/>
              <Input field={subCategoryField} placeholder="Sub Category"/>
              <Input field={imageUrl} placeholder="Image URL"/>

              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="bg-black text-white w-1/2 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white w-1/2 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold mt-2">{name}</h3>
              <p className="text-gray-600">{description}</p>
              <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Category: {category}</p>
              <p className="text-sm text-gray-500">Sub: {subCategory}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleEdit}
                  className="bg-black text-white w-1/2 py-2 rounded-md"
                >
                  Edit Product
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white w-1/2 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
        
      </div>    
    )            
}           

export default AdminProductCard