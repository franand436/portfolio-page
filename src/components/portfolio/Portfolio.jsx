import "./portfolio.scss";

export default function portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Personal Life</li>
        <li>School Programs</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/unraid.png" alt="" />
          <h3>Self Hosted NAS</h3>
        </div>
        <div className="item">
          <img src="assets/plex.png" alt="" />
          <h3>Media Server</h3>
        </div>
        <div className="item">
          <img src="assets/cloudflare.png" alt="" />
          <h3>Purchased domains and adminstration.</h3>
        </div>
        <div className="item">
          <img src="assets/it.png" alt="" />
          <h3>Friends and family IT person</h3>
        </div>
        <div className="item">
          <img src="assets/homelab.png" alt="" />
          <h3>Home Lab</h3>
        </div>
        <div className="item">
          <img src="assets/pythondiscbot.png" alt="" />
          <h3>Python Discord bot</h3>
        </div>
      </div>
    </div>
  );
}
