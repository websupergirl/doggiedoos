import React from "react";
import Table from "react-bootstrap/Table";
import { FaPoop, FaDog } from "react-icons/fa";

export default function WasteRemovalTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan="6">
            Pet Waste Removal Service Rates
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dogs</th>
          <td>
            1 <FaDog />
          </td>
          <td>
            2 <FaDog />
            <FaDog />
          </td>
          <td>
            3 <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            4 <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            5 <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
        </tr>
        <tr>
          <th>Once Weekly</th>
          <td>$16.50/visit<br />$71.50/mo</td>
          <td>$18.50/visit<br />$80.17/mo</td>
          <td>$20.50/visit<br />$88.83/mo</td>
          <td>$22.50/visit<br />$97.50/mo</td>
          <td>$24.50/visit<br />$106.17/mo</td>
        </tr>
        <tr>
          <th>Twice Weekly</th>
          <td>$13.00/visit<br />$112.67/mo</td>
		  <td>$14.00/visit<br />$121.33/mo</td>
		  <td>$15.00/visit<br />$130.00/mo</td>
		  <td>$16.00/visit<br />$138.67/mo</td>
		  <td>$17.00/visit<br />$147.33/mo</td>
        </tr>
        <tr>
          <th>Bi-Weekly</th>
          <td>$30.00/visit<br />$65.00/mo</td>
		  <td>$36.00/visit<br />$78.00/mo</td>
		  <td>$42.00/visit<br />$91.00/mo</td>
		  <td>$48.00/visit<br />$104.00/mo</td>
		  <td>$54.00/visit<br />$117.00/mo</td>
        </tr>
        <tr>
          <th>First Time</th>
          <td>$35 for first 30 mins</td>
		  <td colSpan="4">each 15-minute increment after that is $10</td>
        </tr>
        <tr>
          <th>One Time Clean Up</th>
          <td>$60 for first 30 mins</td>
		  <td colSpan="4">each 15-minute increment after that is $10</td>
        </tr>
        <tr>
          <td colSpan="6">
            Extra large yards with consistent difficult scooping conditions are subject to additional fees.<br />Monthly rates are based on a 52-week calendar.
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
