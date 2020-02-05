<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if ( isset($data['upload_url']) && isset($data['image_path']) ) {
    $imagePath = dirname(__FILE__) . '/../' . $data['image_path'];
    $uploadUrl = $data['upload_url'];

    header('Content-Type: application/json');

    if ( ! file_exists( $imagePath ) ) {
        echo json_encode([
            'error' => 'Image does not exists.'
        ]);
        exit();
    }

    $client = new Client();
    $response = $client->request('POST', $uploadUrl, [
        'multipart' => [
            [
                'name'     => 'photo',
                'contents' => fopen($imagePath, 'r'),
            ]
        ]
    ]);

    echo $response->getBody()->getContents();
}