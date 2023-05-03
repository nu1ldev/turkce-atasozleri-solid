import { createSignal } from "solid-js"
import { PrismaClient } from "@prisma/client"
import Atasozu from "./Atasozu";

const prisma = new PrismaClient();

const Category = ({ categoryName }) => {
  const [isVisible, setIsVisible] = createSignal(false)
  return (
    <div>
      {prisma.category.findMany({ where: { name: categoryName } }).map(item => {
        return (
          <div>
            
          </div>
        )
      })}
    </div>
  )
}

export default Category