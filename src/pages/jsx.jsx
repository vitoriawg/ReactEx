import Layout from "@/components/Layout"

export default function Jsx(){
    const a = 1
    const b = 3
    console.log(a * b)
    return (
        <Layout>
        <div>
            <h1>
                Dalheee
                {a * b}
            </h1>
        </div></Layout>
    )
}