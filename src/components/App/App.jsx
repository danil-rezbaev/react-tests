import './App.scss';
import { useCallback, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function App() {
  const defaultValue = {
    operator: '+'
  }

  const [formData, setFormData] = useState(defaultValue)
  const [result, setResult] = useState(undefined)

  const onChangeField = useCallback((event) => {
    const { name, value } = event.target

    setFormData((data) => ({
        ...data,
        [name]: value
      }))
  }, [])

  const calculate = useCallback(() => {
    const {operator, firstArg, secondArg} = formData

    console.log('formData', formData)

    if (!firstArg || !secondArg || !operator) {
      return 0
    }

    if (typeof +firstArg !== "number" || typeof +secondArg !== "number") {
      return 0
    }

    if(operator === '+') {
      return +firstArg + +secondArg
    } else if(operator === '-') {
      return +firstArg - +secondArg
    } else if(operator === '*') {
      return +firstArg * +secondArg
    }
  }, [formData])

  const buttonClick = useCallback((event) => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      setResult(calculate())
    }
  }, [calculate])

  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col>
            <Form.Control
              placeholder="аргумент 1"
              name="firstArg"
              onChange={onChangeField}
              value={formData["firstArg"] ?? ''}
            />
          </Col>

          <Col>
            <Form.Select
              name="operator"
              onChange={onChangeField}
              aria-label="оператор"
              value={formData["operator"] ?? '+'}
              role="listbox"
              required
            >
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
            </Form.Select>
          </Col>

          <Col>
            <Form.Control
              placeholder="аргумент 2"
              name="secondArg"
              onChange={onChangeField}
              value={formData["secondArg"] ?? ''}
              className="form-control"
            />
          </Col>

          <Col>
            { typeof result !== 'undefined'
              ? <h4 className="result text-start">= {result}</h4>
              : null
            }
          </Col>

          <Col md={12} className="mt-2">
            <Button
              type="submit"
              variant="primary"
              className="text-white w-100"
              role="submitButton"
              onClick={buttonClick}
            >
              Рассчитать!
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
