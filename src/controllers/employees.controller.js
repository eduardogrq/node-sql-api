

export const getUsers = async (req, res) => {
    try {
        res.status(200).json({
            message: "Obteniendo usuarios"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const createUser = async(req, res) => {
    try{
        res.status(200).json({
            message: "Creando usuario"
        })
    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        res.status(200).json({
            message: "Actualizando usuario"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUser = async(req, res) => {
    try{
        res.status(200).json({
            message: "Eliminando usuario"
        })
    } catch( error) {
        res.status(500).json({
            messagen: error.message
        })
    }
}