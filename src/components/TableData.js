import * as React from 'react';

import Table from '@mui/joy/Table';
import { Card, Chip } from '@mui/joy';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function TableData(props) {
  return (
    <Card>
      <Table borderAxis="both" aria-label="table variants" stripe="odd" variant="soft" >
        <tbody>
          <tr key="1">
            <td>Loan Tracking ID :</td>
            <td>{props.user.trackingID}</td>
          </tr>
          <tr key="2">
            <td>Name :</td>
            <td>{props.user.name}</td>
          </tr>
          <tr key="3">
            <td>MPESA Number :</td>
            <td>{props.user.mpesaNumber}</td>
          </tr>
          <tr key="4">
            <td>ID Number :</td>
            <td>{props.user.idNumber}</td>
          </tr>
          <tr key="5">
            <td>Loan Type :</td>
            <td>{props.user.loanType}</td>
          </tr>
          <tr key="6">
            <td>Qualified Amount :</td>
            <td>Ksh. {props.user.loanAmount}</td>
          </tr>
          {
            props.user.accountStatus ?
              <tr key="7">
                <td>Loan Awarded :</td>
                <td>
                  <Chip
                    size="lg"
                    variant="solid"
                    color="success"
                  >
                    In Process
                  </Chip>
                </td>
              </tr>
              :
              <tr key="7">
                <td>Loan Awarded :</td>
                <td>
                  <Chip
                    size="lg"
                    variant="solid"
                    color="warning"
                  >
                    Pending
                  </Chip>
                </td>
              </tr>
          }
          <tr key="7">
            <td>Verfication Fee :</td>
            <td>Ksh. {props.user.fee}</td>
          </tr>
          <tr key="7">
            <td>Account Status :</td>
            <td>
              {
                props.user.accountStatus ?
                  <Chip
                    size="lg"
                    variant="solid"
                    color="success"
                  >
                    Verified
                  </Chip>
                  :
                  <Chip
                    size="lg"
                    variant="solid"
                    color="danger"
                  >
                    Not Verified
                  </Chip>
              }
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}
