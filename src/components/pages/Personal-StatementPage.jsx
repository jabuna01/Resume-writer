import { useEffect, useState } from "react";
import SideNav from "../reusables/SideNav";
import { Popover, OverlayTrigger, Form, Button } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../../services/authentication.service";
import { psRecommendation, responseObj } from "../../configs/config";

export default function PersonalStatementPage() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.apiResponse.response.personal_statement
  );
  const [statement, setStatement] = useState(data.description);
  const [recommendation, setRecommendation] = useState();

  useEffect(() => {
    // axiosWithAuth
    //   .post(serverUri + "ps-recommendation/", {
    //     resume_data_id: responseObj.id,
    //   })
    //   .then()
    //   .catch((err) => console.log(err));

    setRecommendation(psRecommendation.rec_data.personal_statement);
  }, []);

  console.log(recommendation);

  return (
    <>
      <div className="content-wrapper content">
        <SideNav />

        <div className="main-content">
          <div className="tab-title-block">
            <div>
              <h3>Personal Statement</h3>
              <p className="sub-text">
                It is one of the first things a hiring manager will typically
                review. It should comprise details that differentiate you from
                other candidates i.e., Summary of your role and years of
                experience, academic credentials, proficiency with specific
                tools, and major accomplishments.
              </p>
            </div>
            <Button variant="secondary" className="text-nowrap">
              {" "}
              Save and Continue
            </Button>
          </div>
          <Form className="form-wrapper">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Write your summary</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your Summary"
                value={statement}
                style={{resize: "none", minHeight: "200px"}}
              />
            </Form.Group>
          </Form>
          <OverlayTrigger
            trigger="click"
            placement="right-end"
            overlay={
              <Popover id="resume-ai">
                <Popover.Header as="h3">Resume AI</Popover.Header>
                <Popover.Body>
                  <div className="label-title">Suggestion summaries</div>
                  <ul className="recomendation" id="style-3">
                    {
                    recommendation && recommendation.map((data, index) => (
                      <li className="recomendation-item">
                      <Button variant="outline-secondary" onClick={() => setStatement(data)}>
                        <GoPlus />
                      </Button>
                      <div>
                        {data}
                      </div>
                    </li>
                    ))}
                  
                  </ul>
                </Popover.Body>
              </Popover>
            }
          >
            <div className="ai-bot">
              <svg
                width="25"
                height="32"
                viewBox="0 0 25 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_77_4203)">
                  <path
                    d="M14.2507 12.506V13.3126C14.2507 13.5142 14.4188 13.6488 14.5869 13.6488H18.116V15.7325C18.116 15.9341 18.2841 16.0687 18.4522 16.0687H19.2252C19.4268 16.0687 19.5614 15.9006 19.5614 15.7325L19.5611 11.128L22.4851 9.31318C22.6868 9.17884 22.8213 8.94345 22.8213 8.67452V6.69159C23.8632 6.32187 24.5691 5.24648 24.2664 4.00272C24.0648 3.19602 23.4262 2.55761 22.6195 2.35577C21.1406 1.98605 19.7963 3.12874 19.7963 4.54031C19.7963 5.51488 20.435 6.35513 21.3087 6.6578L21.3089 8.27102L18.3849 10.0858C18.1833 10.2202 18.0487 10.4556 18.0487 10.7245V12.1696L14.5869 12.1698C14.385 12.1698 14.2507 12.3379 14.2507 12.506ZM22.1154 3.80103C22.5524 3.80103 22.8884 4.17075 22.8884 4.574C22.8884 5.011 22.5187 5.34697 22.1154 5.34697C21.6784 5.34697 21.3425 4.97725 21.3425 4.574C21.3425 4.13723 21.6787 3.80103 22.1154 3.80103Z"
                    fill="#29527A"
                  />
                  <path
                    d="M1.54611 6.69148V8.67442C1.54611 8.94333 1.68044 9.17847 1.8823 9.31307L4.80632 11.1279V15.6989C4.80632 15.9005 4.97442 16.0351 5.14252 16.0351H5.91549C6.11711 16.0351 6.25168 15.867 6.25168 15.6989L6.25145 13.6489H9.78057C9.98219 13.6489 10.1168 13.4808 10.1168 13.3127V12.5397C10.1168 12.3381 9.94867 12.2035 9.78057 12.2035H6.28524V10.7584C6.28524 10.4895 6.1509 10.2544 5.94904 10.1198L3.02503 8.27114V6.69147C4.06688 6.32175 4.77281 5.24635 4.47014 4.0026C4.26852 3.1959 3.62989 2.55749 2.82319 2.35565C1.34428 1.98593 0 3.12862 0 4.54018C0 5.58228 0.638651 6.38904 1.54618 6.69147L1.54611 6.69148ZM2.28553 3.80101C2.72253 3.80101 3.09223 4.17074 3.09223 4.57399C3.09223 5.01099 2.72251 5.34696 2.28553 5.34696C1.84855 5.34696 1.51256 4.97723 1.51256 4.57399C1.4788 4.13722 1.84852 3.80101 2.28553 3.80101Z"
                    fill="#29527A"
                  />
                  <path
                    d="M8.10005 4.40607V8.64088C8.10005 8.90979 8.23439 9.14493 8.43624 9.27953L11.461 11.1281V15.6991C11.461 15.9007 11.6291 16.0353 11.7972 16.0353H12.5702C12.7718 16.0353 12.9064 15.8672 12.9064 15.6991V11.1281L15.8304 9.31332C16.032 9.17898 16.1666 8.9436 16.1666 8.67467L16.1664 4.40613C17.2082 4.03641 17.9142 2.96101 17.6115 1.71726C17.4099 0.91056 16.7712 0.272148 15.9645 0.0703079C14.5532 -0.265655 13.2089 0.87701 13.2089 2.28863C13.2089 3.2632 13.8475 4.10346 14.7213 4.40613V8.27117L12.2005 9.85084L9.57892 8.23762V4.40607C10.6208 4.03635 11.3267 2.96095 11.024 1.7172C10.8224 0.9105 10.1838 0.272088 9.37708 0.0702479C7.89818 -0.299475 6.55389 0.84322 6.55389 2.25478C6.55413 3.29688 7.19252 4.10364 8.10005 4.40607ZM15.4607 1.5156C15.8977 1.5156 16.2336 1.88532 16.2336 2.28857C16.2336 2.69182 15.8639 3.06154 15.4607 3.06154C15.0237 3.06154 14.6877 2.69182 14.6877 2.28857C14.6877 1.88532 15.0574 1.5156 15.4607 1.5156ZM8.83947 1.5156C9.27647 1.5156 9.61244 1.88532 9.61244 2.28857C9.61244 2.69182 9.24272 3.06154 8.83947 3.06154C8.40247 3.06154 8.0665 2.69182 8.0665 2.28857C8.0665 1.88532 8.40246 1.5156 8.83947 1.5156Z"
                    fill="#29527A"
                  />
                  <path
                    d="M23.2582 10.96C22.8549 10.96 22.5188 11.2962 22.5188 11.6994C22.5188 12.3715 22.2499 13.0102 21.7794 13.4807C21.544 13.7496 21.4769 14.1194 21.7121 14.4218C22.0145 14.8923 22.2161 15.4302 22.2161 15.968C22.2161 16.472 22.048 16.9426 21.8129 17.3796H2.62152C2.35261 16.9764 2.21827 16.4721 2.21827 15.968C2.21827 15.3966 2.38637 14.8588 2.72233 14.4218C2.92395 14.1194 2.89043 13.7497 2.62152 13.4807C2.15099 13.0102 1.88209 12.3716 1.88209 11.6994C1.88209 11.2961 1.5459 10.96 1.14267 10.96C0.739449 10.96 0.436981 11.2962 0.436981 11.6994C0.436981 12.5732 0.705892 13.3799 1.20995 14.0858C0.907516 14.6572 0.77295 15.3293 0.77295 15.9679C0.77295 16.472 0.907288 16.9763 1.07539 17.4468C0.806476 18.3879 0.672138 19.3962 0.672138 20.4381C0.672138 26.824 5.84797 32 12.234 32C18.6199 32 23.7959 26.8242 23.7959 20.4381C23.7959 19.3963 23.6615 18.4214 23.3926 17.4468C23.5607 16.9763 23.6951 16.5057 23.6951 15.9679C23.6951 15.2958 23.527 14.6571 23.2581 14.0858C23.7621 13.4137 24.031 12.5734 24.031 11.6994C23.964 11.2961 23.6615 10.96 23.2581 10.96H23.2582ZM7.02453 21.6816C7.02453 20.8413 7.69667 20.1692 8.53693 20.1692C9.37718 20.1692 10.0493 20.8413 10.0493 21.6816C10.0493 22.5218 9.37718 23.194 8.53693 23.194C7.69667 23.194 7.02453 22.5218 7.02453 21.6816ZM15.2926 26.3869C14.8221 27.6641 13.5448 28.5379 12.2005 28.5379C10.8224 28.5379 9.5789 27.6641 9.10836 26.3534C8.97402 25.9501 9.17564 25.4796 9.57889 25.345C9.98213 25.2107 10.4527 25.4123 10.5872 25.8155C10.8226 26.4877 11.461 26.9247 12.2005 26.9247C12.9064 26.9247 13.5785 26.4541 13.8137 25.782C13.9818 25.3787 14.4186 25.1771 14.8221 25.3115C15.2591 25.5131 15.4607 25.9501 15.2926 26.3869ZM15.864 23.194C15.0237 23.194 14.3516 22.5218 14.3516 21.6816C14.3516 20.8413 15.0237 20.1692 15.864 20.1692C16.7042 20.1692 17.3763 20.8413 17.3763 21.6816C17.3763 22.5218 16.7042 23.194 15.864 23.194Z"
                    fill="#29527A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_77_4203">
                    <rect width="24.337" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </OverlayTrigger>
        </div>
      </div>
    </>
  );
}
