'use client'
import Produtos from "./pages/Produtos/page";
import Header from "@/components/Header/Header";
import "../styles/globals.css"
import { useState } from "react";
import Mensagem from "@/components/Mensagem/Mensagem";
export default function Home() { 
  const [contador, setcount] = useState(0)
  return (
  <div>
    <Header/>
    <Mensagem texto="Mensagem inspiradora :) 😁😁😁"></Mensagem>
    <p>Numero do Contador : {contador} </p>
    <button onClick={() => setcount(contador + 1)}>aumentar</button>
  </div>

  ) 
}