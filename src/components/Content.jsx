import React from 'react'
import Student from './Student'

function Content() {
    const students = [
        {
        image: "https://i.pinimg.com/originals/cf/b1/f6/cfb1f6587913bde2f3adff0227488b20.jpg",
        name: "Edd Pila",
        email: "EddPila02@gmail.com"
        },
        {
        image:"https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "Karen Albarico",
        email: "kalbarico@gmail.com"
        },
        {
        image: "https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "Deem Joseph",
        email: "Deem@gmail.com"
        },
        {
        image: "https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "kerr IAn",
        email: "ker@gmail.com"
        },
        {
        image: "https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=750",
        name: "Jessa Ian",
        email: "karen@gmail.com"
        },
        {
        image:"https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "karen Albarico",
        email: "karen@gmail.com"
        }
        ,
        {
        image: "https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "Karen Albarico",
        email: "karen@gmail.com"
        },
        {
        image: "https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "Karen Albarico",
        email: "karen@gmail.com"
        },
        {
        image: "https://i.pinimg.com/564x/c2/48/79/c24879d26ba38b56cfda66060b98465a.jpg",
        name: "Karen Albarico",
        email: "karen@gmail.com"
        }

    ]
 return(
    <div>
        <h2 className='font-semibold'>Content</h2>
        <div className='flex flex-wrap justify-center gap-5 mt-2 grid'>
            {students.map(student =>{
                return <Student student={student} key={student.name} />
            })}
        </div>
    </div>
 )
        }
export default Content