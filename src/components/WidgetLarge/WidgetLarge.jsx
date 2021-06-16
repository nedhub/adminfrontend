import React from 'react';
import "./WidgetLarge.css";

function WidgetLarge() {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type} >{type}</button>
    }







    return (
        <div className="WidgetLarge">

            <h3 className="widgetLgTitle">

                Latest transactions

            </h3>


            <table className="widgetLgTable">
                <tr className="widgetLgTr">


                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>


                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdm0qx8t0i9gc9.cloudfront.net%2Fthumbnails%2Fvideo%2Fr6uQGb9%2Fvideoblocks-exhausted-businesswoman-business-woman-relaxing-with-phone-in-hotel-room_sqgrbwfw-g_thumbnail-1080_14.png&f=1&nofb=1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>


                    </td>

                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2344.65</td>
                    <td className="widgetLgStatus"><Button  type = "Aprroved"/></td>




                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcontinentalschoolofbeauty.edu%2Fwp-content%2Fuploads%2F2016%2F09%2FFotolia_118918668_AA_Business_Woman-1.png&f=1&nofb=1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>


                    </td>

                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2344.65</td>
                    <td className="widgetLgStatus"><Button type = "Declined"/></td>




                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fportrait-of-cheerful-positive-attractive-rich-manager-in-black-suit-picture-id932322922%3Fk%3D6%26m%3D932322922%26s%3D612x612%26w%3D0%26h%3DLIptq2rlRxPEyT0wP23iyWfSxJUiYkNWxvAzffbMUts%3D&f=1&nofb=1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>


                    </td>

                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2344.65</td>
                    <td className="widgetLgStatus"><Button type = "Pending"/></td>




                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fhappy-businessman-white-20432760.jpg&f=1&nofb=1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>


                    </td>

                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$2344.65</td>
                    <td className="widgetLgStatus"><Button type = "Aprroved"/></td>




                </tr>


            </table>


            
        </div>
    )
}

export default WidgetLarge
