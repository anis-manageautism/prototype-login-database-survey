const bcrypt = require('bcrypt');

exports.register = async (req, res, _next) => {
    const {     
        firstName,
        lastName,
        email,
        confirmEmail,
        location,
        patientFirstName,
        patientSurnameName,
        patientAge,
        diagnosisADD,
        diagnosisADHD,
        diagnosisAnxiety,
        diagnososASD,
        diagnosisAsperger,
        diagnosisAuditoryProcessing,
        diagnosisDepression,
        diagnosisDevCoordinationDisorder,
        diagnosisDownSyndrome,
        diagnosisEpilepsy,
        diagnosisFineMotor,
        diagnosisGastro,
        diagnosisGifted,
        diagnosisOCD,
        diagnosisSensoryIntegrationDisorder,
        diagnosisSpecificLearningDifficulties,
        diagnosisSpeechDelays,
        otherDiagnosis,
        childsTreatment,
        behaviouralTeam,
        communityPaediatrician,
        development,
        dieticians,
        disabilitySupportWorker,
        gastroIntestinal,
        generalPaediatrician,
        holisticDoctor,
        kinesiologist,
        occupationalTherapist,
        physiotherapist,
        psychologist,
        socialWorker,
        otherTreatment,
        childsLookedAfterBy,
        childsTreatmentCostPounds,
        siteLikes,
        designLikes,
        userServiceFeedback,
        serviceLikes,
        serviceDislikes,
        helpInfo,
        otherInfo,
        servicePayFeedback,
        serviceRecommendFeedback,
        shareInfoHealthCare,
        shareInfoSchool,
        similarProduct,
        loggingInformation,
        patientsASD,
        rating1,
        rating2,
        rating3,
        rating4,
        rating5,
    } = req.body;

    console.log(
        firstName,
        lastName,
        email,
        confirmEmail,
        location,
        patientFirstName,
        patientSurnameName,
        patientAge,
        diagnosisADD,
        diagnosisADHD,
        diagnosisAnxiety,
        diagnososASD,
        diagnosisAsperger,
        diagnosisAuditoryProcessing,
        diagnosisDepression,
        diagnosisDevCoordinationDisorder,
        diagnosisDownSyndrome,
        diagnosisEpilepsy,
        diagnosisFineMotor,
        diagnosisGastro,
        diagnosisGifted,
        diagnosisOCD,
        diagnosisSensoryIntegrationDisorder,
        diagnosisSpecificLearningDifficulties,
        diagnosisSpeechDelays,
        otherDiagnosis,
        childsTreatment,
        behaviouralTeam,
        communityPaediatrician,
        development,
        dieticians,
        disabilitySupportWorker,
        gastroIntestinal,
        generalPaediatrician,
        holisticDoctor,
        kinesiologist,
        occupationalTherapist,
        physiotherapist,
        psychologist,
        socialWorker,
        otherTreatment,
        childsLookedAfterBy,
        childsTreatmentCostPounds,
        siteLikes,
        designLikes,
        userServiceFeedback,
        serviceLikes,
        serviceDislikes,
        helpInfo,
        otherInfo,
        servicePayFeedback,
        serviceRecommendFeedback,
        shareInfoHealthCare,
        shareInfoSchool,
        similarProduct,
        loggingInformation,
        patientsASD,
        rating1,
        rating2,
        rating3,
        rating4,
        rating5);

    const password = "manageautism123";
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const username = `${firstName}.${lastName}`;
    const myobj = { username, 
                    email, 
                    password: hashedPassword,
                    firstName,
                    lastName,
                    confirmEmail,
                    location,
                    patientFirstName,
                    patientSurnameName,
                    patientAge,
                    diagnosisADD,
                    diagnosisADHD,
                    diagnosisAnxiety,
                    diagnososASD,
                    diagnosisAsperger,
                    diagnosisAuditoryProcessing,
                    diagnosisDepression,
                    diagnosisDevCoordinationDisorder,
                    diagnosisDownSyndrome,
                    diagnosisEpilepsy,
                    diagnosisFineMotor,
                    diagnosisGastro,
                    diagnosisGifted,
                    diagnosisOCD,
                    diagnosisSensoryIntegrationDisorder,
                    diagnosisSpecificLearningDifficulties,
                    diagnosisSpeechDelays,
                    otherDiagnosis,
                    childsTreatment,
                    behaviouralTeam,
                    communityPaediatrician,
                    development,
                    dieticians,
                    disabilitySupportWorker,
                    gastroIntestinal,
                    generalPaediatrician,
                    holisticDoctor,
                    kinesiologist,
                    occupationalTherapist,
                    physiotherapist,
                    psychologist,
                    socialWorker,
                    otherTreatment,
                    childsLookedAfterBy,
                    childsTreatmentCostPounds,
                    siteLikes,
                    designLikes,
                    userServiceFeedback,
                    serviceLikes,
                    serviceDislikes,
                    helpInfo,
                    otherInfo,
                    servicePayFeedback,
                    serviceRecommendFeedback,
                    shareInfoHealthCare,
                    shareInfoSchool,
                    similarProduct,
                    loggingInformation,
                    patientsASD,
                    rating1,
                    rating2,
                    rating3,
                    rating4,
                    rating5,
                    dateCreated: new Date()
                  };

    console.log(myobj);
    req.app.locals.db.collection('users').insertOne(myobj, (err, resp) => {
       if (err) throw err;
       console.log('document inserted, ',res);
       res.status(201).json({ success: `document inserted ${resp}`});
    });
};

exports.login = async (req, res, _next) => {
    const { email, password } = req.body;
    
    if( !email || !password) {
        res.status(400).json({ error: 'Please provide email and password'});
    }
    
    try {
        const user = await req.app.locals.db.collection('users').findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
            
        if (!isMatch) {
            res.status(404).json({error: 'Invalid credentials'});
        }
        res.status(200).json({ success: `matched`});

    } catch (error) {
        res.status(500).json({error: 'error retrieving doc'});
    }
};

exports.forgotpassword = (req, res, _next) => {
    res.send('forgotpassword route');
};

exports.resetpassword = (req, res, _next) => {
    res.send('resetpassword route');
};

