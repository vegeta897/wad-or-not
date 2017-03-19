<?php

namespace WADon;

class ImageModel
{

    protected $db;
    
    public function __construct(\PDO $db)
    {
        $this->db = $db;
        // Initialize SQL table(s) if necessary
        if ($this->db->query("SHOW TABLES LIKE 'images'")->rowCount() === 0) {
            $this->db->exec(
                'CREATE TABLE images (
                filename VARCHAR(255) NOT NULL UNIQUE,
                width INT NOT NULL,
                height INT NOT NULL,
                upvotes INT NOT NULL DEFAULT 0,
                downvotes INT NOT NULL DEFAULT 0,
                views INT NOT NULL DEFAULT 0
                )'
            );
        }
    }
    
    public function addImage(array $image)
    {
        $query = $this->db->prepare(
            'insert into images values(
                :filename,
                :width,
                :height,
                IFNULL(:upvotes, DEFAULT(upvotes)),
                IFNULL(:downvotes, DEFAULT(downvotes)),
                IFNULL(:views, DEFAULT(views))
            )'
        );
        $query->execute($image);
    }
    
    public function getImage($filename)
    {
        require_once 'Image.php';
        $query = $this->db->prepare('select * from images where filename = :filename limit 1');
        $query->execute(array(':filename' => $filename));
        if ($query->rowCount() === 0) {
            $image = new Image();
            $image->filename = $filename;
        } else {
            list($image) = $query->fetchAll(\PDO::FETCH_CLASS, 'Image');
        }
        return $image;
    }
}
