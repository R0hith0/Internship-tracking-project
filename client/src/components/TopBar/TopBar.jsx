import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">

      <div className="brand">
        IT
      </div>


      <div className="topbar-actions">

        <button className="profile-btn">
          👤 Profile
        </button>


        <button className="settings-btn">
          ⚙
        </button>

      </div>

    </div>
  );
}

export default TopBar;