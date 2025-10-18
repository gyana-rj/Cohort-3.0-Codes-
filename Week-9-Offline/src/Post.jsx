const style = {
  width: 260,
  backgroundColor: "white",
  borderRadius: 15,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};

export function PostComponent({name, subtitle, time, image, description}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />

        <div style={{ fontSize: 15, marginLeft: 10, minHeight: 50}}>
          <b>{name}</b>
          <div>{subtitle}</div>

        {time != undefined && <div style={{display : "flex", alignItems : "center"}}>
          <div>{time}</div>
          <img src={"https://media.lordicon.com/icons/wired/lineal/45-clock-time.svg"} style={{width : 17, height : 17}}/>
        </div>}

        </div>
      </div>
      <div style={{fontSize : 15}}>
        {description}
      </div>
    </div>
  );
}
