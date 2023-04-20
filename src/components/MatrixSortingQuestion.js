// import { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// function MatrixSortingQuestion({ id, prompt, options, onAnswerChange }) {
//   const [answer, setAnswer] = useState({});

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const { source, destination } = result;
//     const newAnswer = { ...answer };

//     // Reorder the answer based on the drag and drop operation
//     const [removed] = newAnswer[source.droppableId].splice(source.index, 1);
//     newAnswer[destination.droppableId].splice(destination.index, 0, removed);

//     setAnswer(newAnswer);

//     // Call the onAnswerChange callback with the updated answer
//     onAnswerChange(newAnswer);
//   };

//   return (
//     <div>
//       <p>{prompt}</p>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <div className="row">
//           <div className="col-md-6">
//             <h5>Uses</h5>
//             <Droppable droppableId="uses">
//               {(provided) => (
//                 <div {...provided.droppableProps} ref={provided.innerRef}>
//                   {options.map((option, index) => (
//                     <Draggable
//                       key={option.id}
//                       draggableId={option.id.toString()}
//                       index={index}
//                     >
//                       {(provided) => (
//                         <div
//                           {...provided.draggableProps}
//                           ref={provided.innerRef}
//                           className="bg-light p-3 mb-3"
//                         >
//                           {option.rightText}
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//           <div className="col-md-6">
//             <h5>Pair with</h5>
//             <Droppable droppableId="pairs">
//               {(provided) => (
//                 <div {...provided.droppableProps} ref={provided.innerRef}>
//                   {options.map((option, index) => (
//                     <div key={option.id} className="bg-white p-3 mb-3">
//                       {option.leftText}
//                       <div style={{ minHeight: "40px" }}>
//                         {answer[option.id] ? (
//                           <Draggable
//                             key={answer[option.id].id}
//                             draggableId={answer[option.id].id.toString()}
//                             index={0}
//                           >
//                             {(provided) => (
//                               <div
//                                 {...provided.draggableProps}
//                                 {...provided.dragHandleProps}
//                                 ref={provided.innerRef}
//                                 className="bg-secondary text-white p-2 mt-2"
//                               >
//                                 {answer[option.id].rightText}
//                               </div>
//                             )}
//                           </Draggable>
//                         ) : (
//                           <div className="bg-light p-2 mt-2" style={{ minHeight: "40px" }} />
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </div>
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }
// export default MatrixSortingQuestion