import React from 'react'

export default function Assignment1() {
  return (
    <div>
    <h1>HTML Examples</h1>
    <h2>Heading Tags</h2>
    {/* Content about Heading Tags */}
    
    <h2>Paragraph Tags</h2>
    <p>This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.</p>
    <p>This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text.</p>
    <p>This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.</p>
    
    <h2>List Tags</h2>
    <h3>Ordered List Tag</h3>
    <ol>
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>     
    </ol>
    
    <h3>Unordered List Tag</h3>
    <ul>
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender's Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>     
    </ul>
    
    <h2>Table Tag</h2>
    <table style={{ border: "1px solid", width: "100%" }}>
        <thead>
        <tr>
            <th>Quiz</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Q1</td>
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Q2</td>
            <td>CSS</td>
            <td>2/10/21</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Q3</td>
            <td>JavaScript</td>
            <td>2/17/21</td>
            <td>95</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Average</td>
            <td>90</td>
        </tr>
        </tfoot>
    </table>
    
    <h2>Image Tag</h2>
    <div>Loading an image from the web:<br/>
        <img style={{ width: "400px" }} src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" alt="Starship"/><br/>
    </div>
    <div>Loading a local image:<br/>
        <img src="teslabot.avif" style={{ height: "200px" }} alt="Tesla Bot"/>
    </div>
    
    <h2>Text Fields</h2>
    <form id="text-fields">
        <label htmlFor="text-fields-username">Username:</label>
        <input id="text-fields-username" placeholder="jdoe"/><br/>
        <label htmlFor="text-fields-password">Password:</label>
        <input type="password" id="text-fields-password" defaultValue="123@#$asd"/><br/>
        <label htmlFor="text-fields-first-name">First name:</label>
        <input type="text" id="text-fields-first-name" title="John"/><br/>
        <label htmlFor="text-fields-last-name">Last name:</label>
        <input type="text" id="text-fields-last-name" placeholder="Doe" defaultValue="Wonderland"/>
    </form>
    
    <h2>Text Boxes</h2>
    <form id="textarea">
        <label>Biography:</label><br/>
        <textarea defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."></textarea>
    </form>
    
    <h3>Buttons</h3>
    <button type="button">Click me!</button>
    
    <h2>File Upload</h2>
    <input type="file"/>
    
    <h2>Radio Buttons</h2>
    <div>
        <label>Favourite movie genre</label><br/>
        <input type="radio" value="COMEDY" name="radio-genre" id="radio-comedy"/>
        <label htmlFor="radio-comedy">Comedy</label><br/>
        <input type="radio" value="DRAMA" name="radio-genre" id="radio-drama"/>
        <label htmlFor="radio-drama">Drama</label><br/>
        <input type="radio" value="SCIFI" name="radio-genre" id="radio-scifi" defaultChecked/>
        <label htmlFor="radio-scifi">Science Fiction</label><br/>
        <input type="radio" value="FANTASY" name="radio-genre" id="radio-fantasy"/>
        <label htmlFor="radio-fantasy">Fantasy</label>
    </div>
    
    <h2>Checkboxes</h2>
    <div>
        <label>Favorite movie genre:</label><br/>
        <input type="checkbox" value="COMEDY" name="check-genre" id="chkbox-comedy" defaultChecked/>
        <label htmlFor="chkbox-comedy">Comedy</label><br/>
        <input type="checkbox" value="DRAMA" name="check-genre" id="chkbox-drama"/>
        <label htmlFor="chkbox-drama">Drama</label><br/>
        <input type="checkbox" value="SCIFI" name="check-genre" id="chkbox-scifi" defaultChecked/>
        <label htmlFor="chkbox-scifi">Science Fiction</label><br/>
        <input type="checkbox" value="FANTASY" name="check-genre" id="chkbox-fantasy"/>
        <label htmlFor="chkbox-fantasy">Fantasy</label>
    </div>
    
    <h2>Dropdowns</h2>
    <div>
        <h3>Select One</h3>
        <label htmlFor="select-one-genre">Favorite movie genre:</label><br/>
        <select id="select-one-genre">
        <option value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
        </select>
    </div>
    
    <div>
        <h3>Select Many</h3>
        <label htmlFor="select-many-genre"> Favorite movie genres: </label><br/>
        <select id="select-many-genre" multiple>
        <option selected value="COMEDY">Comedy</option>
        <option value="DRAMA">Drama</option>
        <option selected value="SCIFI">Science Fiction</option>
        <option value="FANTASY">Fantasy</option>
        </select>
    </div>
    
    <h2>Other HTML Field Types</h2>
    <div>
        <label htmlFor="text-fields-email">Email:</label>
        <input type="email" placeholder="jdoe@somewhere.com" id="text-fields-email"/><br/>
        <label htmlFor="text-fields-salary-start">Starting salary:</label>
        <input type="number" id="text-fields-salary-start" placeholder="1000" defaultValue="100000"/><br/>
        <label htmlFor="text-fields-rating">Rating:</label>
        <input type="range" id="text-fields-rating" max="5" defaultValue="4"/><br/>
        <label htmlFor="text-fields-dob">Date of birth:</label>
        <input type="date" id="text-fields-dob" defaultValue="2000-01-21"/><br/>
    </div>
    
    <h2>Anchor Tag</h2>
    <div>
        Please <a href="https://www.lipsum.com">click here</a> to get dummy text<br/>
        Checkout my <a href="other-page.html">other page</a>
    </div>
    </div>

  )
}
