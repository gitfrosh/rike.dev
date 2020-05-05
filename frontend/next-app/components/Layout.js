import Nav from "./Nav";

const Layout = props => (
  <>
    <main>
      <div className="wrapper-io">
        {" "}
        <Nav />
        <div className="outline">
          <div className="box">{props.children}</div>
        </div>
      </div>
    </main>
    <style jsx global>
      {`
        body {
          font-size: 13px;
          height: 95%;
          width: 100%;
          font-family: open sans, sans-serif;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
          text-align: center;
          background: lightgray url("/img/21989.jpg") repeat;
        }

        pre, pre > p {
          white-space: pre-wrap;       
          white-space: -moz-pre-wrap;  
          white-space: -pre-wrap;      
          white-space: -o-pre-wrap;    
          word-wrap: break-word;   
          font-size: 11px;
        }

        h1 {
          font-size: 70px;
        }
        h2 {
          font-size: 23px;
        }
        h3 {
          font-size: 16px;
        }
        h5 {
          margin-top: 20px !important;
          line-height: 23px;
          font-size: 14px !important;
        }

        .intro, .outro {
          color: dimgray;
          font-size: 85%;
          position: relative;
          padding-left: 1em;
          border-left: 0.2em solid #4d91b3;
        }

        p,
        li, section {
          font-size: 12px;
          color: #242424;
          line-height: 2;
        }

        img {
          max-width: 100%;
          height: auto;
          padding: 5px;
          border: solid 1px #ddd;
          border: solid 1px #CCC;
          -moz-box-shadow: 1px 1px 5px #999;
          -webkit-box-shadow: 1px 1px 5px #999;
          box-shadow: 1px 1px 5px #999;
        }

        code {
          font-family: menlo, inconsolata, monospace;
          font-size: calc(1em - 2px);
          color: #555;
          background-color: #f0f0f0;
          padding: 0.2em 0.4em;
          border-radius: 2px;
        }

        a:hover,
        a:focus {
          text-decoration: none;
          outline: none;
        }

        .title {
          display: block;
          margin-bottom: 40px;
        }

        .title h2 {
          font-size: 60px;
          line-height: 100px;
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: 18px;
        }
        .title p {
          font-size: 12px;
          text-transform: uppercase;
          color: #aaa;
          letter-spacing: 12px;
          margin-bottom: 0;
        }

        @media only screen and (max-width: 767px) {
          .title {
            margin-bottom: 50px;
          }
          .title h2 {
            font-size: 30px;
            line-height: 70px;
          }
          .title p {
            font-size: 10px;
            letter-spacing: 8px;
          }
        }

        @media only screen and (max-width: 480px) {
          .title h2 {
            font-size: 20px;
            letter-spacing: 10px;

          }
        }
      `}
    </style>
    <style jsx>{`
      main {
        text-align: left;
        display: inline-block;
        padding: 3em 3em 3em 3em;
      }
      .wrapper-io {
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 100%;
        position: relative;
      }
      .content {
        position: relative;
        /* min-height: 600px; */
        padding-left: 614px;
        padding-top: 91px;
        -webkit-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
      }
      .outline {
        overflow: hidden;
        outline: none;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 0;
      }
      .outline .box {
        height: 100%;
        padding: 15px 95px 100px 100px;
      }

      @media only screen and (max-width: 480px) {
        .outline .box {
          height: 115%;
        }
      }

      @media only screen and (max-width: 767px) {
        .content {
          padding-left: 0;
          height: auto;
        }
        .outline {
          position: relative;
          width: 100%;
          height: auto;
        }
        .outline .box {
          padding: 0px 30px 40px 30px;
          padding-left: 30px;
          max-width: 420px;
          margin: 0 auto;
        }
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .content {
          padding-left: 0;
          height: auto;
        }
        .outline {
          position: relative;
          width: 100%;
          height: auto;
        }
      }
      @media only screen and (min-width: 1200px) {
        .wrapper-io {
          width: 900px;
        }
      }
    `}</style>
  </>
);

export default Layout;
