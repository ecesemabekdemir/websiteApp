import { useEffect, useState } from "react";
import "./App.css";
import ReactApexChart from "react-apexcharts";

export default function App() { 
  const [dark, setDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);
  
  function handleopenDiv(){
    let sidenav = document.querySelector(".sidenav");
    let content = document.querySelector(".content");
    sidenav.style.width = "250px";
    content.style.width = "calc(100% - 250px)";
    sidenav.style.transition = "all .4s";
  }
  function handleclosediv(){
    let sidenav = document.querySelector(".sidenav");
    sidenav.style.width = "0px";
    content.style.width = "calc(100% + 250px)";
    sidenav.style.transition = "all .4s";
  }

  return (
    <div style={{maxWidth:1440}}
      className={`main ${dark ? "bg-dark" : "bg-light"}`}
      data-bs-theme={dark ? "dark" : "light"}
    >
      <div className="d-flex   m-0 ">
        <div className="d-none d-md-flex ">
          <Nav handleopenDiv={handleopenDiv}/>
        </div>
        <div className="d-none  d-md-flex  p-0">
          <SideNav className="d-none d-md-flex" handleclosediv={handleclosediv}/>
        </div>
        <div
          className="p-0  content "
          style={{ 
            padding: isMobile ? 8 : 32,
          }}
        >
          <div className=" p-3">
            <Navbar dark={dark} />
            <Header setDark={setDark} dark={dark} />
            <Cards dark={dark} />
            <ApexCard dark={dark} />
            <UserSection dark={dark} />
            <UserSectionDetail dark={dark} />
          </div>
        </div>
      </div>
    </div>
  );
}
function ApexCard({ dark }) {
  return (
    <>
      <div className="card" style={{ marginBlock: 32 }}>
        <div className="card-body">
          <div className="d-flex py-3 justify-content-between align-items-center" >
            <div className="col-md-6">
              <h2 className="graphicTitle">Advanced Graphic</h2>
            </div>
            <div className="col-auto">
              <button className="border border-0 bg-transparent">
                <img src="./img/dots menu.svg" alt="" />
              </button>
            </div>
          </div>
          <ApexChart />
          <div className="d-flex py-3 justify-content-between align-items-center">
            <div className="d-flex col-md-6">
              <h2 style={{ color: dark ? "#FFFFFF" : "#2D8A39" }}className="graphicTitle">
                Data graph
              </h2>
            </div>
            <div className="col-auto">
              <div className="d-flex gap-2">
                <button className="btn text-primary d-flex gap-2 align-items-center">
                  Open <img src="./img/externalLink.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Nav({ handleopenDiv} ) {
  
  return (
    <div className="card p-0 " style={{ width: 90 }}>
      <div className="card-body d-flex flex-column ">
        <div className="container text-center">
          <div
            className="row justify-content-center d-flex "
            style={{ gap: 16 }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5631 12.2143L11.0054 22.9286V16.5L23.9999 9L29.5631 12.2143Z"
                fill="#221F20"
              />
              <path
                d="M36.9944 16.5V20.2088L14.2197 33.3544L11.0054 31.5V28.011L33.9587 14.7555L36.9944 16.5Z"
                fill="#221F20"
              />
              <path
                d="M18.6153 35.8956L36.9944 25.2912V31.5L23.9999 39L18.6153 35.8956Z"
                fill="#221F20"
              />
            </svg>

            <button
              className="border-0 bg-transparent"
          
            >
              <img src="./img/search.svg" alt="search" width={22} height={22} />
            </button>
            <button
              className="border-0 bg-transparent"
              onClick={handleopenDiv}
            >
              <img
                src="./img/horizontal.svg"
                alt="horizontal"
                width={22}
                height={22}
              />
            </button>
            <button
              className="border-0 bg-transparent"
           
            >
              <img
                src="./img/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
            </button>
            <button
              className="border-0 bg-transparent"
          
            >
              <img src="./img/alt.svg" alt="alt" width={22} height={22} />
            </button>
          </div>
        </div>
        <div
          className="d-flex mt-auto flex-column align-item-center"
          style={{ gap: 16}}
        >
          <button
            className="border-0 bg-transparent"
        
          >
            <img src="./img/ayarlar.svg" width={22} height={22} />
          </button>
          <button
            className="border-0 bg-transparent"
        
          >
            <img src="./img/cikis.svg" width={22} height={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

function SideNav({handleclosediv}) {

  
  return (
    (
      <div
        className="d-md-flex card sidenav  flex-column justify-content-between p-0"
        style={{
          width: 315, 
          overflowY: "auto",
          zIndex: 1050, // Yan menünün diğer içeriklerin üstünde olmasını sağlamak için z-index ekledim
        }}
      >
        <div className="card-body m-0 p-3  d-flex flex-column justify-content-between"> 
              <div className="mb-3">
              <div
                onClick={handleclosediv}
                style={{ cursor: "pointer" }}
                className="form-label d-flex gap-2 align-items-center"
              >
                <img src="./img/arrowLeft.svg" alt="Arrow Left" />
                Lookscout Dashboard
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="search here..."
              />
            </div>
            <div className="flex-grow-1 ">
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/horizontal2.svg"
                    alt="General"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">General</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/messages.svg"
                    alt="Messages"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">Messages</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/notification.svg"
                    alt="Notification"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">Notification</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img src="./img/users.svg" alt="Users" width={22} height={22} />
                </div>
                <div className="col-md-10">
                  <a href="#">Users</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/events-circle.svg"
                    alt="Events & Logs"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">Events & Logs</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/organization.svg"
                    alt="Organization"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">Organization</a>
                </div>
              </div>
              <div className="row align-items-center mb-3">
                <div className="col-md-2">
                  <img
                    src="./img/user-teams.svg"
                    alt="Teams"
                    width={22}
                    height={22}
                  />
                </div>
                <div className="col-md-10">
                  <a href="#">Teams</a>
                </div>
              </div>
            </div>
            </div>
            <div  >
              <SubscriptionPlan />
            </div>
          </div> 
    )
  );
}


function SubscriptionPlan() {
  return (
    <>
      <div className="row d-flex  align-items-start m-0">
        <div className="col-md-10 d-flex gap-3 ">
          <img src="./img/brianAvatar.svg" width={22} height={22} />
          <p>Brian Ford</p>
        </div>
        <div className="col-md-2 ">
          <button className="border border-0 bg-transparent">
            <img src="./img/dots menu.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="card-body p-3 p-0 m-0 bg-body-tertiary border-0">
        <div className="col d-flex justify-content-between  p-0 mb-2 ">
          <img src="./img/ProgressCircle.svg" alt="" />
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <h5>Subscription Plan</h5>
        <p>Your Subscription plan will expire soon please upgrade!</p>
        <a className="upgrade" href="#">
          Upgrade
        </a>
      </div>
    </>
  );
}

function Navbar({ dark }) {
  return (
    <>
      <div className="d-flex justify-content-between  align-items-start ">
        <div className="d-flex d-md-none " style={{ marginBottom: 20 }}>
          <img src="./img/Lookscout.svg" alt="" />
        </div>
        <div className="d-flex d-md-none">
          <img src="./img/ham-menu.svg" alt="" />
        </div>
      </div>
      <div className={`container nav m-0 ${dark ? "text-white" : "text-dark"}`}>
        <div className="d-none d-md-flex  align-items-start col p-0">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className={dark ? "text-white" : "text-dark"}>
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className={dark ? "text-white" : "text-dark"}>
                Settings
              </a>
            </li>
            <li className="breadcrumb-item active">
              <a href="#" className={dark ? "text-white" : "text-dark"}>
                General
              </a>
            </li>
          </ol>
        </div>
        <div className="d-flex d-md-none back gap-2 " style={{marginBottom:16}}>
          {" "}
          <img src="./img/Icon.svg" />
          <strong>Back</strong>
        </div>
      </div>
    </>
  );
}

function Header({ dark, setDark }) {
  return (
    <>
      <div
        className={`d-flex flex-wrap flex-md-nowrap justify-content-between align-items-start p-0 m-0 ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        <div className="p-0 m-0">
          <h2>Hey there, Brian Ford!</h2>
          <p className="upContent">
            Welcome back, we're happy to have you here!
          </p>
        </div>
        <div className="d-flex col-md-auto align-items-center justify-content-between gap-3 p-0 m-inline-0" style={{ marginBottom: 16 }}>
          <button
            type="button"
            className={`btn ${
              dark ? "btn-outline-light" : "btn-outline-secondary"
            }`}
            onClick={() => setDark(!dark)}
          >
            {" "}
            Edit section
          </button>
          <button className="btn btn-primary" type="submit">
            Add item
          </button>
          <button className="border border-3 rounded-3 bg-transparent">
            <img src="./img/dots menu.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

function Cards({ dark }) {
  return (
    <>
      <div className="cardChart ">
        <div className=" d-flex flex-wrap flex-md-nowrap  gap-1 " >
          <div  className=" col-md-4 ">
            <Card
              title={"Revenue"}
              price={"$390"}
              img={"./img/newChart.svg"}
              status={"New"}
              bgcolor={dark ? "#5390F8" : "#F5FAFF"}
              textcolor={dark ? "#FFFFFF" : "#437EF7"}
            />
          </div>
          <div  className=" col-md-4 ">
            <Card
              title={"Expenses"}
              price={"$680"}
              img={"./img/globalChart.svg"}
              status={"Global"}
              bgcolor={dark ? "#F04438" : "#FFF2F0"}
              textcolor={dark ? "#FFF2F0" : "#E2341D"}
            />
          </div>
          <div  className=" col-md-4">
            <Card
              title={"Expenses"}
              price={"$680"}
              img={"./img/intuitiveChart.svg"}
              status={"Intuitive"}
              bgcolor={dark ? "#5DC264" : "#F0FAF0"}
              textcolor={dark ? "#F0FAF0" : "#2D8A39"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ title, price, img, status, bgcolor, textcolor }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container m-0">
          <div className="d-flex justify-content-between  align-items-start">
            <div className="col-md-4">{title}</div>
            <div className="col-auto">
              <button className="border border-0 bg-transparent">
                <img src="./img/dots menu.svg" alt="dotsMenu" />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="col-md-9">
              <strong>{price} </strong>
              <div className="container p-0 my-2">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span
                      className="badge"
                      style={{ backgroundColor: bgcolor, color: textcolor }}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="col-auto p-0">
                    <p className="m-0" style={{ fontSize: "14px" }}>
                      monthly growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-auto">
              <img src={img} alt="newChart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserSection({ dark }) {
  return (
    <>
      <div className={`userSection my-3 ${dark ? "text-white" : "text-dark"}`}>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4 d-flex d-ms-gap-3">
            <h5>Brian Ford</h5>
          </div>
          <div className="col-auto d-flex gap-3">
            <button
              className={`btn ${
                dark ? "btn-outline-light" : "btn-outline-secondary"
              }`}
            >
              Edit Section
            </button>
            <button className="btn btn-primary">Add item</button>
          </div>
          <div className="col-auto d-flex d-md-none">
            <button className="border border-0 bg-transparent">
              <img src="./img/dots menu.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function LookscoutTeam({ dark }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container  px-3 ">
            <div className="row justify-content-between align-items-center">
              <div className="col-8">
                <p>Lookscout Team</p>
              </div>
              <div className="col-auto">
                <button className="border border-0 bg-transparent">
                  <img src="./img/dots menu.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <LookscoutTeamUser
            avatar={"./img/latoyaAvatar.svg"}
            name={"Latoya Langosh"}
            role={"Dynamic"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />
          <hr />

          <LookscoutTeamUser
            avatar={"./img/abelAvatar.svg"}
            name={"Abel Mohr"}
            role={"Dynamic"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />
          <hr />
          <LookscoutTeamUser
            avatar={"./img/shariAvatar.svg"}
            name={"Shari Stamm"}
            role={"Chief"}
            status={"Offline"}
            bgcolor={dark ? "#2C3444" : "#F7F7F8"}
            textcolor={dark ? "#437EF7" : "#272D37"}
          />
          <hr />
          <LookscoutTeamUser
            avatar={"./img/earlAvatar.svg"}
            name={"Earl Johnson"}
            role={"National"}
            status={"Offline"}
            bgcolor={dark ? "#2C3444" : "#F7F7F8"}
            textcolor={dark ? "#437EF7" : "#272D37"}
          />
          <hr />
          <LookscoutTeamUser
            avatar={"./img/erickAvatar.svg"}
            name={"Erick Champlin"}
            role={"Central"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />
          <hr />
          <div className="d-grid gap-2">
            <button className="btn btn-primary">View all</button>
          </div>
        </div>
      </div>
    </>
  );
}

function LookscoutTeamUser({ avatar, name, role, status, bgcolor, textcolor }) {
  return (
    <div className="container px-3 py-1">
      <div className="row justify-content-between align-items-center">
        <div className="col-2 p-0">
          <img src={avatar} alt="" />
        </div>
        <div className="col-6 p-0">
          <div className="container p-0 ">
            <div className="row ">
              <p className="m-0">{name}</p>
              <p className="m-0">{role}</p>
            </div>
          </div>
        </div>
        <div className="col-2 p-0">
          <span
            className="badge"
            style={{ backgroundColor: bgcolor, color: textcolor }}
          >
            {status}
          </span>
        </div>
        <div className="col-1 p-0">
          <img src="./img/sagOkicon.svg" />
        </div>
      </div>
    </div>
  );
}

function UpdatedMaterials() {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container  px-3 ">
            <div className="row justify-content-between align-items-center">
              <div className="col-8">
                <p>Updated Materials</p>
              </div>
              <div className="col-auto">
                <button className="border border-0 bg-transparent">
                  <img src="./img/dots menu.svg" className="svg-icon"  alt="" />
                </button>
              </div>
            </div>
          </div>
          <UpdatedMaterialsDoc
            img={"./img/pdf.svg"}
            name={"Lookscout Resources"}
            byte={"80.69 mb"}
            icon={"./img/download.svg"}
          />
          <hr />

          <UpdatedMaterialsDoc
            img={"./img/mp4.svg"}
            name={"Lookscout Updates"}
            byte={"320.32 mb"}
            icon={"./img/download.svg"}
          />
          <hr />
          <UpdatedMaterialsDoc
            img={"./img/pdf.svg"}
            name={"Lookscout Guides"}
            byte={"320.32 mb"}
            icon={"./img/placeholder.svg"}
          />
          <hr />
          <UpdatedMaterialsDoc
            img={"./img/zip.svg"}
            name={"Lookscout Design System"}
            byte={"320.32 mb"}
            icon={"./img/download.svg"}
          />
          <hr />
          <UpdatedMaterialsDoc
            img={"./img/mp4.svg"}
            name={"Lookscout Guides"}
            byte={"125.05 mb"}
            icon={"./img/download.svg"}
          />
          <hr />
          <div className="d-flex gap-2 ">
            <button className="btn btn-light w-100">Cancel</button>
            <button className="btn btn-primary w-100">Upload</button>
          </div>
        </div>
      </div>
    </>
  );
}

function UpdatedMaterialsDoc({ img, name, byte, icon }) {
  return (
    <div className="container px-3 py-1 ">
      <div className="row justify-content-between align-items-center">
        <div className="col-2 p-0">
          <img src={img} alt="" />
        </div>
        <div className="col-9 p-0">
          <div className="container p-0 ">
            <div className="row ">
              <p className="m-0">{name}</p>
              <p className="m-0">{byte}</p>
            </div>
          </div>
        </div>
        <div className="col-1 p-0">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}

function RecentTransactions({ dark }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container  px-3">
            <div className="row justify-content-between align-items-center">
              <div className="col-8">
                <p>Recent Transactions</p>
              </div>
            </div>
          </div>
          <RecentTransactionsApps
            dark={dark}
            img={"./img/pinterest.svg"}
            name={"Pinterest Team"}
            date={"Jan 23 2022"}
            status={"Done"}
            bgcolor={dark ? "#5DC264" : "#F0FAF0"}
            textcolor={dark ? "#F0FAF0" : "#2D8A39"}
          />

          <RecentTransactionsApps
            img={"./img/sketch.svg"}
            name={"Sketch Team"}
            date={"Jun 15 2022"}
            status={"Failed"}
            bgcolor={dark ? "#F04438" : "#FFF2F0"}
            textcolor={dark ? "#FFF2F0" : "#E2341D"}
          />
          <RecentTransactionsApps
            img={"./img/gitlab.svg"}
            name={"Gitlab Team"}
            date={"Jan 15 2022"}
            status={"Done"}
            bgcolor={dark ? "#5DC264" : "#F0FAF0"}
            textcolor={dark ? "#F0FAF0" : "#2D8A39"}
          />
          <RecentTransactionsApps
            img={"./img/clickup.svg"}
            name={"Clickup Team"}
            date={"Jan 15 2022"}
            status={"Failed"}
            bgcolor={dark ? "#F04438" : "#FFF2F0"}
            textcolor={dark ? "#FFF2F0" : "#E2341D"}
          />
          <RecentTransactionsApps
            img={"./img/deliverooo.svg"}
            name={"Deliverooo Team"}
            date={"Jan 15 2022"}
            status={"Done"}
            bgcolor={dark ? "#5DC264" : "#F0FAF0"}
            textcolor={dark ? "#F0FAF0" : "#2D8A39"}
          />
          <div className="d-flex gap-2 ">
            <button className="btn text-primary d-flex gap-2 align-items-center">
              Open <img src="./img/externalLink.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function RecentTransactionsApps({
  img,
  name,
  date,
  status,
  bgcolor,
  textcolor,
}) {
  return (
    <div className="container" style={{ padding: 16 }}>
      <div className="row justify-content-between align-items-center">
        <div className="col-2 p-0">
          <img src={img} />
        </div>
        <div className="col-8 p-0">
          <div className="container p-0 ">
            <div className="row ">
              <p className="m-0">{name}</p>
              <p className="m-0">{date}</p>
            </div>
          </div>
        </div>
        <div className="col-2 p-0">
          <span
            className="badge"
            style={{ backgroundColor: bgcolor, color: textcolor }}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}

function UserSectionDetail({ dark }) {
  return (
    <div className="d-flex flex-wrap d-md-row p-0  ">
      <div className="row " style={{ gap: 16 }}>
        <div className="col">
          <LookscoutTeam dark={dark} />
        </div>
        <div className="col">
          <UpdatedMaterials dark={dark} />
        </div>
        <div className="col">
          <RecentTransactions dark={dark} />
        </div>
      </div>
    </div>
  );
}

function ApexChart() {
  const options = {
    series: [
      {
        name: "interfaces",
        group: "actual",
        data: [37, 21, 73, 80, 15, 100, 82, 25, 75, 68, 19, 100],
      },
      {
        name: "build-ups",
        group: "actual",
        data: [23, 17, 56, 60, 12, 75, 69, 15, 55, 50, 17, 74],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        dataLabels: {
          position: "top",
        },
      },
    },
    xaxis: {
      categories: [
        "Apr",
        "May",
        "June",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
      ],
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    fill: {
      opacity: 1,
    },
    colors: ["#008FFB", "#80c7fd"],
    yaxis: {
      min: 0,
      max: 100,
      forceNiceScale: true,
      labels: {
        formatter: (val) =>
          [0, 25, 50, 75, 100].includes(val) ? `${val}% ` : "",
      },
      tickAmount: 4,
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
}
