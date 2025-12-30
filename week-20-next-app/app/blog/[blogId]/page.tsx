import axios from "axios";
export default async function BlogPage({params} : {
    params : { blogId : string}
}){
    const {blogId} = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const data = response.data;

    return <div className="text-white">
        Blog Page {blogId}
        <br />
        title - {data.title}
        <br />
        body - {data.body}
    </div>
}