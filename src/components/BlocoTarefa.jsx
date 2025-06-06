const BlocoTarefa = ({ title, text, onDragStart }) => {
   return (
     <div
       draggable
       onDragStart={onDragStart}
       style={{
         padding: '10px',
         margin: '10px 0',
         border: '1px solid #ccc',
         borderRadius: '5px',
         backgroundColor: '#fff',
         cursor: 'grab',
       }}
     >
       <h4>{title}</h4>
       <p>{text}</p>
     </div>
   )
 }
 
 export default BlocoTarefa
 