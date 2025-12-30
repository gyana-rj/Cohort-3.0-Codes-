export default async function PostPage({params} : {
    params : Promise<{postIds : string}>
}){
    const data = await params
    return <div className="text-white">
        {JSON.stringify(data)}
    </div>
}