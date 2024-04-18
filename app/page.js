import Image from "next/image";

export default function Home() {
  return (
    <body style={{ margin: "0px" }}>
      <div class="container" >
        <div class="menu" style={{ backgroundColor: "#f8f9fd" }}>
          <p style={{ margin: "0", marginTop: "11px", marginBottom: "19px" }}>
            <img src="image/driveicon.png" width={30} style={{ marginLeft: "20px", marginRight: "8px", verticalAlign: "middle" }} />Drive
          </p>
          <button class="new">New</button>
          <ul>
            <li><img src="image/home.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Home</li>
            <li><button class="mydriveselected"><img src="image/mydrive.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />My Drive</button></li>
            <li class="selected" style={{ marginBottom: "20px" }}><img src="image/computer.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Computers</li>
            <li><img src="image/share.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Shared with me</li>
            <li><img src="image/recent.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Recent</li>
            <li style={{ marginBottom: "20px" }}><img src="image/starred.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Starred</li>
            <li><img src="image/spam.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Spam</li>
            <li><img src="image/bin.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Bin</li>
            <li><img src="image/storage.png" width={13} style={{ verticalAlign: "middle", marginRight: "15px" }} />Storage (78% full)</li>
            <li>
              <div class="storage">
                <div class="storagebar"></div>
              </div>
            </li>
            <li>11.83 GB of 15 GB used</li>
            <li><button class="getmorestorage">Get more storage</button></li>
          </ul>
        </div>
        <div class="content" style={{ backgroundColor: "#f8f9fd" }}>
          <div class="searchbar" style={{ marginTop: "6px" }}>
            <div class="searchicon" >
              <button class="search"><img src="image/searchicon.png" width={15} style={{ paddingLeft: "5px" }} /></button>
            </div>
            <div class="searchinput">
              <input class="search" placeholder="Search in Drive" style={{ verticalAlign: "middle" }} />
            </div>
            <div class="searchfilter">
              <button class="search"><img src="image/filtericon.png" width={15} /></button>
            </div>
          </div>
          <div class="options">
            <button style={{ height: "50px" }}><img src="image/questionmark.png" width={15} /></button>
            <button style={{ height: "50px" }}><img src="image/setting.png" width={15} /></button>
            <button style={{ height: "50px" }}><img src="image/more.png" width={15} /></button>
          </div>
          <div class="body">
            <div class="mydrive" >
              <p style={{ margin: "0px", height: "30px", paddingTop: "15px" }}>My Drive ▾</p>
            </div>
            <div class="type" >
              <button class="list"><img src="image/correct.png" width={9} /> <img src="image/list.png" width={12} /></button>
              <button class="grid"><img src="image/grid.png" width={12} /></button>
              <button><img src="image/information.png" width={13} /></button>
            </div>
            <div class="selection" >
              <button class="seltype">Type ▾</button>
              <button class="selpeople">People ▾</button>
              <button class="selmodified">Modified ▾</button>
            </div>
            <div class="tip" >
              <div class="tip1">
                <img src="image/home.png" width={13} />
                <b style={{ paddingLeft: "10px" }}>Change your start page?</b> Currently it's set to Home. You can change it at any time in Settings.
              </div>
              <div class="tip2">
                <b>Change to My Drive</b> <img src="image/close.png" width={10} style={{ marginLeft: "30px" }} />
              </div>
            </div>
            <div class="detail" >
              <div class="line">
                <div class="name">
                  <b>Name ↑</b>
                </div>
                <div class="owner">
                  <b>Owner</b>
                </div>
                <div class="modified">
                  <b>Last modified ▾</b>
                </div>
                <div class="filesize">
                  <b>File size</b>
                </div>
                <div class="icon">
                  <button></button>
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder1.png" width={20} /><b> 01 - Account, Insurance and Taxes</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  7 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                  <img src="image/add.png" style={{ paddingRight: "20px" }} width={12} />
                  <img src="image/download.png" style={{ paddingRight: "20px" }} width={12} />
                  <img src="image/edit.png" style={{ paddingRight: "20px" }} width={12} />
                  <img src="image/starred.png" style={{ paddingRight: "20px" }} width={12} />
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder2.png" width={20} /><b> 02 - eBook</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  5 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder3.png" width={20} /><b> 03 - Pictures and Videos</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  7 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder4.png" width={20} /><b> 04 - University Materials</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  5 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder5.png" width={20} /><b> 05 - Backup</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  5 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder6.png" width={20} /><b> 06 - Documents</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  6 May 2019 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder7.png" width={20} /><b> 07 - KUMATEN</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  10 Jun 2021 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder8.png" width={20} /><b> 08 - loT Project</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  10 Jun 2021 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder8.png" width={20} /><b> 19 - Covid Antigen Test</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  29 Jul 2021 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder8.png" width={20} /><b> 64 - Outsource</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  14 Oct 2022 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder8.png" width={20} /><b> 99 - Others</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  10 Jun 2021 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <p style={{ color: "gray" }}><img src="image/folder9.png" width={20} /><b> BD&Main-MB</b> <img src="image/bingray.png" width={10} /></p>
                </div>
                <div class="owner">
                  <b style={{ color: "#0939a8" }}>Remove shortcut</b>
                </div>
                <div class="modified"></div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <img src="image/folder10.png" width={20} /><b> Card Mterials</b>
                </div>
                <div class="owner">
                  <img src="image/profile.png" width={20} /> me
                </div>
                <div class="modified">
                  15 Jun 2022 me
                </div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
              <div class="line">
                <div class="name">
                  <p style={{ color: "gray" }}><img src="image/folder9.png" width={20} /><b> For Social</b> <img src="image/bingray.png" width={10} /></p>
                </div>
                <div class="owner">
                  <b style={{ color: "#0939a8" }}>Remove shortcut</b>
                </div>
                <div class="modified"></div>
                <div class="filesize">
                  —
                </div>
                <div class="icon">
                </div>
                <div>
                  <img src="image/moreoption.png" width={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile" style={{ backgroundColor: "#f8f9fd" }}>
          <p>
            <button style={{ height: "60px" }}><img src="image/profile.png" width={30} /></button>
          </p>
          <p>
            <button style={{ height: "40px", paddingLeft: "10px" }}><img src="image/calendar.png" width={15} /></button>
          </p>
          <p>
            <button style={{ height: "40px", paddingLeft: "10px" }}><img src="image/keep.png" width={15} /></button>
          </p>
          <p>
            <button style={{ height: "40px", paddingLeft: "10px" }}><img src="image/tasks.png" width={15} /></button>
          </p>
          <p>
            <button style={{ height: "40px", paddingLeft: "10px" }}><img src="image/contact.png" width={15} /></button>
          </p>
          <button style={{ borderBottom: "1px #e7ecf0 solid", width: "30px" }}></button>
          <p>
            <button style={{ height: "50px", paddingLeft: "10px" }}><img src="image/plus.png" width={10} /></button>
          </p>
          <p>
            <button style={{paddingTop:"700%"}}><img src="image/arrow.png" width={8} /></button>
          </p>
        </div>
      </div>
    </body>
  );
}
