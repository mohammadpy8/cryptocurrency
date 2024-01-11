import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center font-Yek-Bold">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2 font-Yek-Bold text-2xl">به نظر میرسد که گم شده اید</h3>

                <p className="text-3xl font-Yek-Bold mt-4">صفحه مورد نظر یافت نشد!</p>

                <Link to="/" className="link_404 rounded-xl font-Yek-Bold hover:ring-[7px] ring-[#a2f99c] transition-all duration-300">
                  برگشت به خانه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
