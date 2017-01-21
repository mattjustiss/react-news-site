var React       = require("react"),
    Bootstrap   = require("react-bootstrap"),
    loadImage   = require('blueimp-load-image-browserify/js/load-image'),
    Well        = Bootstrap.Well,
    Media       = Bootstrap.Media,
    Grid        = Bootstrap.Grid,
    Row         = Bootstrap.Row,
    Col         = Bootstrap.Col,
    Thumbnail   = Bootstrap.Thumbnail;

var Article = React.createClass({
    render: function () {
        return (
            <Row>
                <Well>
                    <Grid>
                        <Row>
                            <Media>
                                <Col xs={1}>
                                    <Media.Left align="top">
                                        <img width={73} height={73} src={loadImage(this.props.authorImage, function (img) {document.body.appendChild(img)})} alt={"73x73"}/>
                                    </Media.Left>
                                </Col>
                                <Col xs={8}>
                                    <Media.Body>
                                        <Media.Heading>{this.props.title}</Media.Heading>
                                        <h5>{this.props.subHead}</h5>
                                        <p>{this.props.text}</p>
                                        <Thumbnail href="#" alt={"180x180"} src={this.props.thumbnail} />
                                        <p>{this.props.location}</p>
                                    </Media.Body>
                                </Col>
                            </Media>
                        </Row>
                    </Grid>
                </Well>
            </Row>
        );
    }
});

module.exports = Article;