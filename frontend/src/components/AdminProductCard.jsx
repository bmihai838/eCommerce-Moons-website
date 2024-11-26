import { Link } from "react-router-dom";
import { useField } from "../hooks/useField-fetch";
import { useState } from "react"; 
import Input from "./Input";
import { useAddProduct, useUpdateProduct, useDeleteProduct } from "../hooks/useProducts";

const AdminProductCard = ({ product, onDelete, onEdit, isCreating = false, onCancel }) => {
    const { image, name, price, id, description, category, subCategory } = product
    const [isEditing, setIsEditing] = useState(isCreating)
    const [selectedFile, setSelectedFile] = useState(null)
    const { addProduct } = useAddProduct()
    const { updateProduct } = useUpdateProduct()
    const { deleteProduct } = useDeleteProduct()

    // Input Fields
    const nameField = useField('text')
    const priceField = useField('number')
    const descriptionField = useField('text')
    const categoryField = useField('text')
    const subCategoryField = useField('text')

    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0])
    }

    const handleEdit = () => {
      nameField.setValue(name || '')
      priceField.setValue(price || 0)
      descriptionField.setValue(description || '')
      categoryField.setValue(category || '')
      subCategoryField.setValue(subCategory || '')
      setIsEditing(true)
    }

    const handleCancel = () => {
      setIsEditing(false)
      if(isCreating && onCancel) {
        onCancel()
      }
    }

    const handleDelete = async () => {
      try {
        await deleteProduct(id)
        onDelete(id)
      } catch (err) {
        console.error('Delete failed:', err)
      }
    }

    const handleSubmit = async () => {
      try {
        if (isCreating && !selectedFile) {
          alert('Please select an image')
          return
        }

        const formData = new FormData()
        formData.append('name', nameField.value)
        formData.append('price', priceField.value)
        formData.append('description', descriptionField.value)
        formData.append('category', categoryField.value.toUpperCase())
        formData.append('subCategory', subCategoryField.value)
    
        if (selectedFile) {
          formData.append('image', selectedFile)
        }

        if (isCreating) {
          await addProduct(formData)
        } else {
          await updateProduct(product.id, formData)
          setIsEditing(false)
        }
        onEdit()
      } catch (err) {
        console.error(`${isCreating ? 'Create' : 'Update'} failed:`, err)
      }
    }

    if (isEditing || isCreating) {
      return (
        <div className="mx-4 rounded-lg max-w-md w-full p-4 border border-gray-200 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-center">
            {isCreating ? 'Create New Product' : 'Edit Product'}
          </h2>
          <div className="space-y-3">
              <input 
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border rounded"
              />
              <Input field={nameField} placeholder="Name"/>
              <Input field={priceField} placeholder="Price"/>
              <Input field={descriptionField} placeholder="Description"/>
              <Input field={categoryField} placeholder="Category"/>
              <Input field={subCategoryField} placeholder="Sub Category"/>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-black text-white w-1/2 py-2 rounded-md hover:bg-gray-500 transition-colors"
                >
                  {isCreating ? 'Create' : 'Save'}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-black text-white w-1/2 py-2 rounded-md hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
          </div>
        </div>
      )
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
        </div>
      </div>    
    )            
}           

export default AdminProductCard