import { mock, Random } from "mockjs";
import List from "./list";

mock('/', 'get', () => List);
