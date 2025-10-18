export function DarkMode(){
    return (
    <>
      <div className= "h-screen bg-white dark:bg-black text-black dark:text-white">
        <button onClick={() => {
        document.documentElement.classList.toggle("dark");
        }}> Toggle</button>
      </div>
    </>
  );
}