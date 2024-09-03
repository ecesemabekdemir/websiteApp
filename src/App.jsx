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

  function handleopenDiv() {
    let sidenav = document.querySelector(".canvas");
    let content = document.querySelector(".screen_side");
    sidenav.style.width = "250px";
    content.style.width = "calc(100% - 273px)";
    sidenav.style.transition = "all .2s";
  }
  function handleclosediv() {
    let sidenav = document.querySelector(".canvas");
    let content = document.querySelector("screen_side");
    sidenav.style.width = "0px";
    content.style.width = "calc(100% -1px)";
    sidenav.style.transition = "all .2s";
  }

  return (
    <div
      style={{ maxWidth: 1440 }}
      className={`main ${dark ? "bg-dark" : "bg-light"}`}
      data-bs-theme={dark ? "dark" : "light"}
    >
      <div className="d-flex">
        <Nav handleopenDiv={handleopenDiv} setDark={setDark} dark={dark} />
        <div className="canvas_all-list px-3 pt-3 d-flex flex-column justify-content-between">
          <div className="canvas_all d-none  d-lg-block border-end show">
            <SideNav
              handleclosediv={handleclosediv}
              handleopenDiv={handleopenDiv}
            />
          </div>
        </div>

        <div className="screen_side flex-grow-1">
          <div className=" p-3">
            <Navbar dark={dark} />
            <Header setDark={setDark} dark={dark} />
            <div className="main_page d-flex flex-column mt-3">
              <Cards dark={dark} />
              <ApexCard dark={dark} />
              <UserSection dark={dark} />
              <UserSectionDetail dark={dark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ApexCard({ dark }) {
  return (
    <>
      <div className="card-general chart" style={{ marginBlock: 32 }}>
        <div
          className="chart__title d-flex py-3 justify-content-between align-items-center"
          style={{ paddingInline: 20 }}
        >
          <h3 className="graphicTitle">Advanced Graphic</h3>
          <button className="border border-0 bg-transparent">
            <img src="./img/dots menu.svg" alt="" />
          </button>
        </div>
        <div
          className="chart__hero py-3 border-top-bottom"
          style={{ paddingInline: 20 }}
        >
          <ApexChart />
        </div>
        <div
          className="chart__bottom d-flex py-3 justify-content-between align-items-center"
          style={{ paddingInline: 20 }}
        >
          <div className="d-flex col-md-6">
            <span
              style={{ color: dark ? "#FFFFFF" : "#5F6D7E" }}
              className="d-none d-md-block"
            >
              Data graph
            </span>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn text-primary d-flex gap-2 align-items-center">
              Open <img src="./img/externalLink.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
function Nav({ handleopenDiv, dark, setDark }) {
  return (
    <div
      className="sidebar_all d-none d-lg-block border-end"
      style={{ width: 90 }}
    >
      <div className="sidebar-list px-3 pt-3 d-flex flex-column justify-content-between">
        <div className="sidebar-list__top d-flex flex-column gap-1 ">
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

          <button className="sidebar-list__item border-0 bg-transparent">
            <img src="./img/search.svg" alt="search" width={24} height={24} />
          </button>
          <button
            className="sidebar-list__item border-0 bg-transparent active"
            onClick={handleopenDiv}
          >
            <img
              src="./img/horizontal.svg"
              alt="horizontal"
              width={24}
              height={24}
            />
          </button>
          <button className="sidebar-list__item  border-0 bg-transparent ">
            <img
              src="./img/calendar.svg"
              alt="calendar"
              width={24}
              height={24}
            />
          </button>
          <button className="sidebar-list__item border-0 bg-transparent">
            <img src="./img/alt.svg" alt="alt" width={24} height={24} />
          </button>
        </div>
        <div className="sidebar-list__bottom d-flex flex-column gap-1 mt-auto">
          <button
            type="button"
            className={`btn border-0`}
            onClick={() => setDark(!dark)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-brightness-high"
              viewBox="0 0 16 16"
            >
              <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
            </svg>
          </button>
          <button className="sidebar-list__item border-0 bg-transparent">
            <img src="./img/ayarlar.svg" width={24} height={24} />
          </button>
          <button className="sidebar-list__item border-0 bg-transparent">
            <img src="./img/cikis.svg" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

function SideNav({ handleclosediv, handleopenDiv }) {
  return (
    <div
      className="canvas d-flex flex-column justify-content-between"
      style={{
        width: 315,
        overflowY: "auto",
      }}
    >
      <div className="canvas-list__top d-flex flex-column gap-1">
        <div className="mb-3">
          <div
            className="canvas__title d-flex align-items-center gap-2"
            onClick={handleclosediv}
            style={{ cursor: "pointer" }}
          >
            <img src="./img/arrowLeft.svg" alt="Arrow Left" />
            Lookscout Dashboard
          </div>
          <div className="canvas-list__input">
            <input
              type="text"
              className="form-control"
              placeholder="search here..."
            />
          </div>
        </div>
        <div role="button">
          <div className="canvas-list flex-columun gap-1 mb-3">
            <div className="canvas-list__item d-flex align-items-center">
              <div
                className="canvas-list__img"
                onClick={handleopenDiv}
                style={{ cursor: "pointer" }}
              >
                <img
                  src="./img/horizontal2.svg"
                  alt="General"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">General</a>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img
                  src="./img/messages.svg"
                  alt="Messages"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">Messages</a>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img
                  src="./img/notification.svg"
                  alt="Notification"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">Notification</a>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img src="./img/users.svg" alt="Users" width={22} height={22} />
              </div>
              <div className="col-md-10">
                <a href="#">Users</a>
              </div>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img
                  src="./img/events-circle.svg"
                  alt="Events & Logs"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">Events & Logs</a>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img
                  src="./img/organization.svg"
                  alt="Organization"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">Organization</a>
            </div>
            <div className="canvas-list__item d-flex align-items-center">
              <div className="canvas-list__img">
                <img
                  src="./img/user-teams.svg"
                  alt="Teams"
                  width={22}
                  height={22}
                />
              </div>
              <a href="#">Teams</a>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-list__bottom d-flex flex-column gap-1 mt-auto">
        <SubscriptionPlan />
      </div>
    </div>
  );
}

function SubscriptionPlan() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between ">
        <div className="d-flex align-items-start gap-2">
          <img src="./img/brianAvatar.svg" width={22} height={22} />
          <p>Brian Ford</p>
        </div>
        <button type="button" className="border border-0 bg-transparent">
          <img src="./img/dots menu.svg" alt="" />
        </button>
      </div>
      <div className="card px-3 pb-3">
        <div className="card__top d-flex justify-content-between ">
          <img src="./img/ProgressCircle.svg" alt="" />
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <h5 className="mt-2 mb-1">Subscription Plan</h5>
        <p className="card-text">
          Your Subscription plan will expire soon please upgrade!
        </p>
        <a className="upgrade mt-3 align-self-start" href="#">
          Upgrade
        </a>
      </div>
    </div>
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
      <nav className={`container nav m-0 ${dark ? "text-white" : "text-dark"}`}>
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
        <div
          className="d-flex d-md-none back gap-2 "
          style={{ marginBottom: 16 }}
        >
          {" "}
          <img src="./img/Icon.svg" />
          <strong>Back</strong>
        </div>
      </nav>
    </>
  );
}

function Header({ dark }) {
  return (
    <>
      <div
        className={`header d-lg-flex justify-content-between align-items-start p-0 m-0  ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        <div className="header__title m-t3">
          <h2>Hey there, Brian Ford!</h2>
          <h3 className="upContent">
            Welcome back, we're happy to have you here!
          </h3>
        </div>
        <div
          className="d-flex col-md-auto align-items-center justify-content-between gap-3 p-0 m-inline-0"
          style={{ marginBottom: 16 }}
        >
          <button
            className={`btn ${
              dark ? "btn-outline-light" : "btn-outline-secondary"
            }`}
          >
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
      <div className=" d-flex flex-wrap " style={{ gap: 20 }}>
        <div className="flex-fill">
          <Card
            title={"Revenue"}
            price={"$390"}
            img={"./img/newChart.svg"}
            status={"New"}
            bgcolor={dark ? "#5390F8" : "#F5FAFF"}
            textcolor={dark ? "#FFFFFF" : "#437EF7"}
          />
        </div>
        <div className="flex-fill">
          <Card
            title={"Expenses"}
            price={"$680"}
            img={"./img/globalChart.svg"}
            status={"Global"}
            bgcolor={dark ? "#F04438" : "#FFF2F0"}
            textcolor={dark ? "#FFF2F0" : "#E2341D"}
          />
        </div>
        <div className="flex-fill">
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
    </>
  );
}

function Card({ title, price, img, status, bgcolor, textcolor }) {
  return (
    <>
      <div className="card-general " style={{ padding: 16 }}>
        <div className="cards__item py-3 d-flex justify-content-between">
          <h3>{title}</h3>
        </div>
        <div>
          <button className="border border-0 bg-transparent">
            <img src="./img/dots menu.svg" alt="dotsMenu" />
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center pb-3">
          <div className="d-flex flex-column gap-12px">
            <strong>{price} </strong>
            <div className="container p-0 my-2">
              <div className="d-flex align-items-center gap-2">
                <span
                  className="badge"
                  style={{ backgroundColor: bgcolor, color: textcolor }}
                >
                  {status}
                </span>
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
    </>
  );
}

function UserSection({ dark }) {
  return (
    <>
      <div
        className={`userSection d-lg-flex justify-content-between align-items-start my-3 ${
          dark ? "text-white" : "text-dark"
        }`}
      >
        <div className="pb-3 pb-lg-0">
          <h3>Brian Ford</h3>
        </div>
        <div className="userSection-btns d-flex align-items-center justify-content-between">
          <div className="d-flex" style={{ gap: 12 }}>
            <button
              className={`px-3 border-radius-1 btn ${
                dark ? "btn-outline-light" : "btn-outline-secondary"
              }`}
              style={{ paddingRight: 12 }}
            >
              Edit Section
            </button>
            <button className="btn btn-primary">Add item</button>
          </div>
          <div className="d-flex d-md-none">
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
      <div className="d-flex flex-column">
        <div className="team-list__title px-4 py-3 d-flex justify-content-between">
          <h3>Lookscout Team</h3>
          <div>
            <button className="border border-0 bg-transparent">
              <img src="./img/dots menu.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="team-list px-4 ">
          <LookscoutTeamUser
            avatar={"./img/latoyaAvatar.svg"}
            name={"Latoya Langosh"}
            role={"Dynamic"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />

          <LookscoutTeamUser
            avatar={"./img/abelAvatar.svg"}
            name={"Abel Mohr"}
            role={"Dynamic"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />

          <LookscoutTeamUser
            avatar={"./img/shariAvatar.svg"}
            name={"Shari Stamm"}
            role={"Chief"}
            status={"Offline"}
            bgcolor={dark ? "#2C3444" : "#F7F7F8"}
            textcolor={dark ? "#437EF7" : "#272D37"}
          />

          <LookscoutTeamUser
            avatar={"./img/earlAvatar.svg"}
            name={"Earl Johnson"}
            role={"National"}
            status={"Offline"}
            bgcolor={dark ? "#2C3444" : "#F7F7F8"}
            textcolor={dark ? "#437EF7" : "#272D37"}
          />

          <LookscoutTeamUser
            avatar={"./img/erickAvatar.svg"}
            name={"Erick Champlin"}
            role={"Central"}
            status={"Online"}
            bgcolor={dark ? "#2C3444" : "#F5FAFF"}
            textcolor={dark ? "#437EF7" : "#437EF7"}
          />

          <button className="btn btn-primary mx-4 py-2 text-white my-3">
            View all
          </button>
        </div>
      </div>
    </>
  );
}

function LookscoutTeamUser({ avatar, name, role, status, bgcolor, textcolor }) {
  return (
    <>
      <div
        className="team-list__item py-3 d-flex justify-content-between align-items-center  border-bottom"
        style={{ paddingInline: 20 }}
      >
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
          <img src={avatar} alt="" />
          <div>
            <h6>{name}</h6>
            <p>{role}</p>
          </div>
        </div>
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
          <span
            className="badge px-2"
            style={{
              backgroundColor: bgcolor,
              color: textcolor,
              paddingBlock: 2,
            }}
          >
            {status}
          </span>
          <img src="./img/sagOkicon.svg" />
        </div>
      </div>
    </>
  );
}

function UpdatedMaterials() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="file-upload-list__title px-4 py-3 d-flex justify-content-between align-items-center">
          <h3>Updated Materials</h3>
          <button className="border border-0 bg-transparent">
            <img src="./img/dots menu.svg" className="svg-icon" alt="" />
          </button>
        </div>
        <div className="file-upload-list px-4 border-top-bottom">
          <UpdatedMaterialsDoc
            img={"./img/pdf.svg"}
            name={"Lookscout Resources"}
            byte={"80.69 mb"}
            icon={"./img/download.svg"}
          />
          <UpdatedMaterialsDoc
            img={"./img/mp4.svg"}
            name={"Lookscout Updates"}
            byte={"320.32 mb"}
            icon={"./img/download.svg"}
          />
          <UpdatedMaterialsDoc
            img={"./img/pdf.svg"}
            name={"Lookscout Guides"}
            byte={"320.32 mb"}
            icon={"./img/placeholder.svg"}
          />
          <UpdatedMaterialsDoc
            img={"./img/zip.svg"}
            name={"Lookscout Design System"}
            byte={"320.32 mb"}
            icon={"./img/download.svg"}
          />
          <UpdatedMaterialsDoc
            img={"./img/mp4.svg"}
            name={"Lookscout Guides"}
            byte={"125.05 mb"}
            icon={"./img/download.svg"}
          />
          <div className="file-upload-list__buttons px-4 my-3 d-flex gap-2 ">
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
    <div
      className="file-upload-list__item py-3 d-flex align-items-center justify-content-between border-bottom"
      style={{ paddingInline: 20 }}
    >
      <div className="d-flex align-items-center " style={{ gap: 10 }}>
        <img src={img} alt="" />
        <div>
          <h6>{name}</h6>
          <p>{byte}</p>
        </div>
      </div>
      <img src={icon} alt="" />
    </div>
  );
}

function RecentTransactions({ dark }) {
  return (
    <>
      <div className="recent-transactions__title py-3 px-4">
        <p>Recent Transactions</p>
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
    <>
      <div
        className="recent-transactions-list__item py-3 d-flex align-items-center justify-content-between"
        style={{ padding: 16 }}
      >
        <div className="d-flex align-items-center gap-3">
          <img src={img} />
          <div className="col-6 p-0">
            <div className="container p-0 ">
              <div className="row ">
                <h6 className="m-0">{name}</h6>
                <p className="m-0">{date}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 p-0 gap-1">
          <button
            className="badge done px-2 "
            style={{
              backgroundColor: bgcolor,
              color: textcolor,
              paddingBlock: 2,
              border: 0,
            }}
          >
            {status}
          </button>
        </div>
      </div>
    </>
  );
}

function UserSectionDetail({ dark }) {
  return (
    <div className="d-flex flex-wrap gap-xl-4 gap-3">
      <div className="flex-fill">
        <div className="card-general">
          <LookscoutTeam dark={dark} />
        </div>
      </div>
      <div className="flex-fill">
        <div className="card-general">
          <UpdatedMaterials dark={dark} />
        </div>
      </div>
      <div className="flex-fill">
        <div className="card-general">
          <div className="d-flex flex-column">
            <RecentTransactions dark={dark} />
          </div>
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
