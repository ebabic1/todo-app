const InputComponent = ({isEditMode, task, handleTaskChange, handleUpdate, handleSave}) => {
    return (
        <div>
          <input value={task} onChange={(event) => handleTaskChange(event)} />            
            <button
              disabled={!task.length}
              onClick={isEditMode ? handleUpdate : handleSave}
              className="create-button"
            >
            {isEditMode ? 'UPDATE' : 'CREATE'} 
            </button>
        </div>
    );
}
export default InputComponent;