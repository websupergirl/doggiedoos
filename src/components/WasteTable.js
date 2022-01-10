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
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
          <td>
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
            <FaDog />
          </td>
        </tr>
        <tr>
          <th>First Visit</th>
          <td>$35+</td>
          <td>$45+</td>
          <td>$55+</td>
          <td>$65+</td>
          <td>$75+</td>
        </tr>
        <tr>
          <th colSpan="6">
            <FaPoop /> Price Per Week <FaPoop />
          </th>
        </tr>
        <tr>
          <th>Twice Weekly</th>
          <td>$20</td>
          <td>$23</td>
          <td>$26</td>
          <td>$29</td>
          <td>$32</td>
        </tr>
        <tr>
          <th>Weekly</th>
          <td>$14.50</td>
          <td>$16.50</td>
          <td>$18.50</td>
          <td>$21</td>
          <td>$23</td>
        </tr>
        <tr>
          <th>Bi-Weekly</th>
          <td>$25</td>
          <td>$30</td>
          <td>$40</td>
          <td>$45</td>
          <td>$50</td>
        </tr>
        <tr>
          <th>One Time*</th>
          <td>$60+</td>
          <td>$70+</td>
          <td>$80+</td>
          <td>$90+</td>
          <td>$100+</td>
        </tr>
        <tr>
          <td colSpan="6">
            Prices are based on a .25-acre yard. Rates will vary with yard size.
            <br />* Significant amounts of accumulated waste may affect rates.
            This is a one-time fee, collected at the time the service is
            rendered.
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
