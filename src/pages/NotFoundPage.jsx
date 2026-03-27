import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <h2>ไม่พบหน้าที่คุณต้องการ</h2>
      <Link to="/">
        <button onClick>[← กลับหน้าหลัก]</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
