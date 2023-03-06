import React from 'react';

const ViewGameBook = () =>{
     return <div>
        <section>
            <div class="container mt-5">
             
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Description</th>
      <th scope="col">Available</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {books.map(books => (
    <tr>
      <th scope="row">1</th>
      <td>{books.name}</td>
      <td>{books.author}</td>
      <td>{books.description}</td>
    </tr>
  ))}
  </tbody>
</table>


            </div>    
        </section>          
        
        </div>
};
export default ViewGameBook;