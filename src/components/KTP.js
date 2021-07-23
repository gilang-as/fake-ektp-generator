import React, { useRef, useEffect } from 'react'
import KTPBackground from "../assets/images/ktp-background.jpg";
import PasPhoto from "../assets/images/pas-foto.jpeg";
import TandaTangan from "../assets/images/signature.png";
import {KtpContext} from "../states/providers/ktp";
const Canvas = props => {

    const {state} = React.useContext(KtpContext);
    const canvasRef = useRef(null)

    const GenHeaderKTP = (canvas, context, {provinceText = "PROVINSI DKI JAKARTA", cityText = "JAKARTA BARAT"}) => {
        context.fillStyle = "#000000";
        context.font = "normal 600 13pt Arial";
        const provinceTextWidth = context.measureText(provinceText).width;
        context.fillText(provinceText , (canvas.width/2) - (provinceTextWidth / 2), 21);
        const cityTextWidth = context.measureText(cityText).width;
        context.fillText(cityText , (canvas.width/2) - (cityTextWidth / 2), 38);
    }

    const GenNIK = (canvas, context, {nikText = "0000000000000000"}) => {
        context.fillStyle = "#000000";
        context.font = "normal 600 13.4pt OCR A Extended";
        context.fillText(nikText, 130, 82)
    }

    const GenValue = (canvas, context, {nameText = "MAYA MELINSIA", bornText= "JAKARTA, 19-05-1996", genderText = "PEREMPUAN", addressText = "KOMP WALIKOTA BLK A 5/1", rtrwText = "002/001", villageText = "MERUYA SELATAN", districtText = "KEMBANGAN", religionText = "ISLAM", maritalStatusText = "BELUM KAWIN", professionText = "PELAJAR/MAHASISWA", citizenshipText = "WNI", validUntilText = "SEUMUR HIDUP", bloodText = "-"}) => {
        context.fillStyle = "#000000";
        context.font = "normal 600 8.5pt Arial";
        context.fillText(nameText, 133, 101.5)
        context.fillText(bornText, 133, 116.4)
        context.fillText(genderText, 133, 130.3)
        context.fillText(addressText, 133, 145.5)
        context.fillText(rtrwText, 133, 160)
        context.fillText(villageText, 133, 174.5)
        context.fillText(districtText, 133, 188)
        context.fillText(religionText, 133, 203)
        context.fillText(maritalStatusText, 133, 217)
        context.fillText(professionText, 133, 232)
        context.fillText(citizenshipText, 133, 246)
        context.fillText(validUntilText, 133, 260.3)
        context.fillText(bloodText, 322, 130.3)
    }

    const GenPasPhoto = (canvas, context) => {
        const pasPhotoObj = new Image();
        pasPhotoObj.src = PasPhoto;
        pasPhotoObj.onload = () => {
            context.globalAlpha = 0.76 ;
            context.drawImage(pasPhotoObj, 365, 75, 124, 150)
        }
    }

    const GenMaker = (canvas,  context, {cityText = "KUDUS", dateText = "19-01-2018"}) => {
        context.fillStyle = "#000000";
        context.font = "normal 600 7pt Arial";
        const provinceTextWidth = context.measureText(cityText).width;
        context.fillText(cityText , (canvas.width/2+177) - (provinceTextWidth / 2), 236);
        const cityTextWidth = context.measureText(dateText).width;
        context.fillText(dateText , (canvas.width/2+177) - (cityTextWidth / 2), 246);
    }

    const GenSignature = (canvas, context) => {
        const signatureObj = new Image();
        signatureObj.src = TandaTangan;
        signatureObj.onload = () => {
            context.globalAlpha = 0.81;
            const imageWidth=60;
            context.drawImage(signatureObj, (canvas.width/2+177) - (imageWidth / 2), 245, imageWidth, 50)
        }
    }

    useEffect(()=>{

    })

    useEffect(() => {
        const canvas = canvasRef.current
        canvas.style.width ='100%';
        canvas.style.height='100%';
        canvas.width  = canvas.offsetWidth+68;
        canvas.height = canvas.offsetHeight+30;
        const context = canvas.getContext('2d');
        const ktpObj = new Image();
        ktpObj.src = KTPBackground;

        ktpObj.onload = () => {
            context.drawImage(ktpObj, 0, 0, 500, 300);
            GenHeaderKTP(canvas, context, {})
            GenNIK(canvas, context, {})
            GenValue(canvas, context, {nameText: state.name?.toUpperCase(), addressText: state.address?.toUpperCase()})
            GenPasPhoto(canvas, context)
            GenMaker(canvas, context, {})
            GenSignature(canvas, context)
        };
        // context.fillStyle = '#ffffff';
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }, [state])

    return <canvas ref={canvasRef} {...props}/>
}

export default Canvas