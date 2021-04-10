export default function Sizebar(props) {
  return (
    <div
      style={{
        top: props.height + 10,
        position: "absolute"
      }}
    >
      <p>size는 1이상이어야 합니다</p>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange}
        placeholder={'number please'}
      />
    </div>
  );
}