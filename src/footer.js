import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
          <h4>To do list</h4> 
            <p>© 2023 All rights reserved</p>
          </div>
          <div className="col-sm-3">
            <h4>Contact</h4>
            <ul className="list-unstyled">
              <li>Email: hariomarya305@gmail.com</li>
              <li>Phone: +91 9548256369</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
