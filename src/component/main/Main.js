
<Card
              className="resim card flex-grow-2  "
              style={{ backgroundImage: `url(${image})` }}
            >
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {date}
                </Card.Subtitle>
                <Card.Text>{desc}</Card.Text>
              </Card.Body>
            </Card>