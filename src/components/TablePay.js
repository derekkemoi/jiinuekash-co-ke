import React, { useState } from 'react';

import Table from '@mui/joy/Table';
import IconButton from '@mui/joy/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Avatar, Card, Chip, Typography } from '@mui/joy';
import url from '../mpesa.png'


export default function TablePay(props) {
    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Till Copied');
        } catch (err) {
            setCopySuccess('Copying Failed');
        }
    };
    // useEffect(() => {
    //     fetch('https://derekkemoi.github.io/MKOPOPAWA/tillDetails.json')
    //         .then(response => response.json())
    //         .then((data) => (
    //             setPaymentDetails(data.mpesaPaymentDetails), setProgress(false)
    //         ));
    // }, []);
    return (
        <Card>
            <Table borderAxis="both" aria-label="table variants" variant="soft" >
                <caption>
                    <Typography component="h2" level="h4">
                        How To Make Verification Payment :
                    </Typography>
                </caption>
                <tbody>
                    <tr key="1">
                        <td>Go to M-PESA :</td>
                        <td><Avatar variant={"rounded"} alt="The image" src={url} style={{
                            width: 70,
                            height: 48,
                        }} /></td>
                    </tr>
                    <tr key="2">
                        <td>Select :</td>
                        <td>
                            <Typography level="title-md">
                                Lipa na M-PESA
                            </Typography>
                        </td>
                    </tr>
                    <tr key="2">
                        <td>Select :</td>
                        <td>
                            <Typography level="title-md">
                                Buy Goods and Services
                            </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter Till Number :</td>
                        <td>
                            <Typography level="title-md">
                                4158516
                                <Chip
                                    onClick={() => { copyToClipBoard(4158516) }}
                                    size="lg"
                                    variant="solid"
                                    color="success"
                                >
                                    {
                                        copySuccess ? copySuccess : "Click To Copy Till"
                                    }
                                </Chip>
                            </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter Amount :</td>
                        <td><Typography level="title-md">
                            Ksh. {props.fee}
                        </Typography></td>
                    </tr>
                    <tr key="2">
                        <td>Enter your PIN :</td>
                        <td><Typography level="title-md">
                            Enter you PIN and confirm payment
                        </Typography></td>
                    </tr>

                </tbody>
            </Table>
        </Card>
    );
}
