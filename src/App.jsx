import { useEffect, useState } from "react";
import Guitar from "./componentes/Guitar";
import Header from "./componentes/Header";
import { db } from "./data/db";

function App() {

  const [data, setData]= useState(db)
  const [cart, setCart]= useState([])

  function addToCart(item){

    const itemEsxists= cart.findIndex( (guitar)=> guitar.id===item.id )
   if (itemEsxists>=0) {
     console.log("Ya existe")
   }else{

    item.quantity= 1
    console.log("No existe Agregando")
    
   setCart([...cart,item])
   }


  }


  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar)=>(
            <Guitar 
            key= {guitar.id}
           guitar={guitar}
           setCart={setCart}
           addToCart={addToCart}
            />
          ))}
         
         
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
