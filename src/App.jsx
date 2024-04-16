import { FaCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

function App() {
  const pricePkgs = [
    {
      title: "Etiam elementum",
      description: "Lorem ipsum dolor sit amet.",
      starter: true,
      business: true,
      professional: true,
    },
    {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet. adipisicing elit.",
      starter: false,
      business: true,
      professional: true,
    },
    {
      title: "At temporibus nihil",
      description:
        "Lorem ipsum dolor sit amet. At temporibus nihil ipsum eaque.",
      starter: true,
      business: false,
      professional: true,
    },
    {
      title: "Adipisicing elit",
      description: "At temporibus nihil ipsum eaque hello.",
      starter: true,
      business: false,
      professional: false,
    },
  ];
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <td>
            <h2>Pricing Table Design</h2>

            <div className="vll"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, assumenda. At temporibus nihil ipsum eaque.
            </p>
          </td>
          <td className="">
            <div className="pkg-name">Starter</div>
            <div className="vl bg-green"></div>
            <div className="p-4">
              <div className="price-box bg-green">
                <span className="curr">$</span>
                <span className="price">9</span>
                <span className="price-dur">
                  per <br /> month
                </span>
              </div>
            </div>
          </td>
          <td className="">
            <div className="pkg-name">business</div>
            <div className="vl bg-blue"></div>
            <div className="p-4">
              <div className="price-box bg-blue">
                <span className="curr">$</span>
                <span className="price">21</span>
                <span className="price-dur">
                  per <br /> month
                </span>
              </div>
            </div>
          </td>
          <td className="">
            <div className="pkg-name">Professional</div>
            <div className="vl bg-pink"></div>
            <div className="p-4">
              <div className="price-box bg-pink">
                <span className="curr">$</span>
                <span className="price">42</span>
                <span className="price-dur">
                  per <br /> month
                </span>
              </div>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        {pricePkgs?.map((item, index) => (
          <tr key={index}>
            <td>
              <h4>{item?.title}</h4>
              <p>{item?.description}</p>
            </td>
            <td className="tab-check green">
              {item?.starter ? <FaCheckCircle /> : <IoIosCloseCircleOutline />}
            </td>
            <td className="tab-check blue">
              {item?.business ? <FaCheckCircle /> : <IoIosCloseCircleOutline />}
            </td>
            <td className="tab-check pink">
              {item?.professional ? (
                <FaCheckCircle />
              ) : (
                <IoIosCloseCircleOutline />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
