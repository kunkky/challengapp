app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error for debugging
    res.status(500).json({
        responseCode: "96",
        responseMessage: "Internal server error",
        data: null,
    });
});
