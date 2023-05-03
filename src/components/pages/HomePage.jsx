import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import Landing from "../../scenes/resumeTemplate";
import SideNav from "../reusables/SideNav";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js";
import { saveAs } from "file-saver";
import { asBlob } from "html-docx-js-typescript";
import { Provider } from "react-redux";
import store from "../../store";

export default function HomePage() {
  const saveAsPdf = () => {
    html2pdf(document.getElementById("resume"), {
      margin: 0,
      filename: "resume.pdf",
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    });
  };

  const saveAsDocx = async () => {
    // const htmlString = ReactDOMServer.renderToStaticMarkup(
    //   <Provider store={store}>
    //     <Landing />
    //   </Provider>
    // );

    const htmlString = document.getElementById("resume").innerHTML;
    const fileData = await asBlob(htmlString, {
      orientation: "landscape",
      margins: { top: 100 },
    });
    saveAs(fileData, "resume.docx");
  };

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="header-info">
            <div>
              <div className="text-muted small">
                Your resume has been parsed successfully.
              </div>
              <div className="mt-3">
                Also you can edit it with our featured AI that will make your CV
                even better. Try it !
              </div>
            </div>
            <div className="d-flex" style={{ height: "38px" }}>
              <Button variant="secondary" style={{ marginRight: "16px" }}>
                Edit
              </Button>
              <DropdownButton
                id="dropdown-basic-button"
                title="Download"
                variant="primary"
              >
                <Dropdown.Item onClick={saveAsPdf}>pdf</Dropdown.Item>
                <Dropdown.Item onClick={saveAsDocx}>docx</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <Landing />
        </div>
      </div>
    </>
  );
}
