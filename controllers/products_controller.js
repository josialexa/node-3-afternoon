module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product(name, description, price, image_url)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.log('Error creating product', err)
                res.status(500).json('Error creating product!')
            })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.product_id
        db.read_product(id)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.log('Error reading product', err)
                res.status(500).json('Error reading product!')
            })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products()
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.log('Error reading products', err)
                res.status(500).json('Error reading products')
            })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.product_id
        const {desc} = req.query
        db.update_product(id, desc)
            .then(response => res.status(200).send(json(response)))
            .catch(err => {
                console.log('Error updating product', err)
                res.status(500).json('Error updating products')
            })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const product_id = req.params.product_id
        db.delete_product(product_id)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.log('Error deleting product', err)
                res.status(500).json('Error deleting product')
            })
    }
}